#!/usr/bin/env node
/**
 * Generates voice_options entries and VOICES_LIST from the full Google TTS list.
 * Usage: node build-voices-from-list.js [voices.tsv] [wavenet.js]
 * - TSV path: (Language, Voice type, Language code, Voice name, SSML Gender). If omitted, reads stdin.
 * - wavenet.js path: if given, skips generating any voice whose wav already exists (avoids duplicates).
 */
const fs = require('fs');
const path = require('path');

const LANG_LABELS = {
  'af-ZA': 'Afrikaans (South Africa)', 'ar-XA': 'Arabic', 'bn-IN': 'Bengali (India)', 'bg-BG': 'Bulgarian',
  'ca-ES': 'Catalan (Spain)', 'yue-HK': 'Chinese (Hong Kong)', 'cmn-CN': 'Mandarin Chinese', 'cmn-TW': 'Mandarin Chinese (TW)',
  'hr-HR': 'Croatian', 'cs-CZ': 'Czech', 'da-DK': 'Danish', 'nl-BE': 'Dutch (Belgium)', 'nl-NL': 'Dutch (Netherlands)', 'nl-Nl': 'Dutch',
  'en-AU': 'English (Australia)', 'en-IN': 'English (India)', 'en-GB': 'English (UK)', 'en-US': 'English (US)',
  'et-EE': 'Estonian', 'fil-PH': 'Filipino', 'fi-FI': 'Finnish', 'fr-CA': 'French (Canada)', 'fr-FR': 'French (France)',
  'de-DE': 'German', 'el-GR': 'Greek', 'gl-ES': 'Galician (Spain)', 'gu-IN': 'Gujarati (India)', 'he-IL': 'Hebrew',
  'hi-IN': 'Hindi', 'hu-HU': 'Hungarian', 'is-IS': 'Icelandic', 'id-ID': 'Indonesian', 'it-IT': 'Italian',
  'ja-JP': 'Japanese', 'kn-IN': 'Kannada (India)', 'ko-KR': 'Korean', 'lv-LV': 'Latvian', 'lt-LT': 'Lithuanian',
  'ms-MY': 'Malay (Malaysia)', 'ml-IN': 'Malayalam (India)', 'mr-IN': 'Marathi (India)', 'nb-NO': 'Norwegian',
  'pl-PL': 'Polish', 'pa-IN': 'Punjabi (India)', 'pt-BR': 'Portuguese (Brazil)', 'pt-PT': 'Portuguese (Portugal)',
  'ro-RO': 'Romanian', 'ru-RU': 'Russian', 'sr-RS': 'Serbian (Cyrillic)', 'sk-SK': 'Slovak', 'sl-SI': 'Slovenian',
  'es-ES': 'Spanish (Spain)', 'es-US': 'Spanish (US)', 'sv-SE': 'Swedish', 'ta-IN': 'Tamil (India)', 'te-IN': 'Telugu (India)',
  'th-TH': 'Thai', 'tr-TR': 'Turkish', 'uk-UA': 'Ukrainian', 'ur-IN': 'Urdu (India)', 'vi-VN': 'Vietnamese', 'eu-ES': 'Basque (Spain)'
};

function makeKey(langCode, voiceName) {
  const short = voiceName.replace(new RegExp('^' + langCode.replace(/-/g, '\\-') + '-'), '');
  const w = (langCode + '_' + short).replace(/-/g, '_').replace(/\s+/g, '_');
  return w;
}

function makeWav(langCode, voiceName) {
  if (voiceName.indexOf('-') >= 0) return voiceName;
  return langCode + '-Chirp3-HD-' + voiceName;
}

function shortText(langCode, voiceName) {
  const label = LANG_LABELS[langCode] || langCode;
  const short = voiceName.replace(/^[a-z]{2}-[A-Z]{2}-/, '');
  return label + ' ' + short;
}

function parseTSV(content) {
  const rows = [];
  const lines = content.split(/\r?\n/).filter(l => l.trim());
  for (const line of lines) {
    const parts = line.split('\t');
    if (parts.length < 5) continue;
    const [languageLabel, voiceType, languageCode, voiceName, ssmlGender] = parts;
    if (!languageCode || !voiceName || languageCode === 'Language code') continue;
    rows.push({
      languageLabel: languageLabel.trim(),
      voiceType: voiceType.trim(),
      languageCode: languageCode.trim(),
      voiceName: voiceName.trim(),
      gender: (ssmlGender || 'NEUTRAL').trim().toLowerCase()
    });
  }
  return rows;
}

/** Extract existing wav values from wavenet.js to avoid generating duplicates. */
function existingWavs(jsPath) {
  const js = fs.readFileSync(jsPath, 'utf8');
  const re = /\twav:\s*'([^']*)'/g;
  const set = new Set();
  let m;
  while ((m = re.exec(js)) !== null) set.add(m[1]);
  return set;
}

function main() {
  let input;
  if (process.argv[2]) {
    input = fs.readFileSync(process.argv[2], 'utf8');
  } else {
    input = fs.readFileSync('/dev/stdin', 'utf8');
  }
  const existing = process.argv[3]
    ? existingWavs(path.resolve(process.argv[3]))
    : new Set();
  const rows = parseTSV(input);
  const seen = new Set();
  const jsEntries = [];
  const htmlEntries = [];
  const langSet = new Set();

  for (const r of rows) {
    const key = makeKey(r.languageCode, r.voiceName);
    if (seen.has(key)) continue;
    const wav = makeWav(r.languageCode, r.voiceName);
    if (existing.has(wav)) continue; // skip duplicate wav (keep existing friendly key)
    seen.add(key);
    langSet.add(r.languageCode);
    const text = shortText(r.languageCode, r.voiceName);
    const gender = r.gender === 'female' ? 'female' : r.gender === 'male' ? 'male' : 'female';
    jsEntries.push(`\t${key}: { language: '${r.languageCode}', gender: '${gender}', wav: '${wav}', text: '${text.replace(/'/g, "\\'")}' },`);
    htmlEntries.push(`        { value: '${key}', text: '${text.replace(/'/g, "\\'")}', lang: '${r.languageCode}' },`);
  }

  const outDir = path.join(__dirname, '..');
  const jsBlock = '\n\t// Full list from Google TTS docs\n' + jsEntries.join('\n').replace(/,\s*$/, '');
  const htmlBlock = '\n        // Full list from Google TTS docs\n' + htmlEntries.join('\n');

  fs.writeFileSync(path.join(outDir, 'voices_js_append.txt'), jsBlock, 'utf8');
  fs.writeFileSync(path.join(outDir, 'voices_html_append.txt'), htmlBlock, 'utf8');

  const langNames = [];
  for (const code of [...langSet].sort()) {
    const name = LANG_LABELS[code] || code;
    langNames.push(`'${code}': '${name}'`);
  }
  fs.writeFileSync(path.join(outDir, 'lang_names_append.txt'), langNames.join(', '), 'utf8');

  console.log('Generated', jsEntries.length, 'voices,', langSet.size, 'languages.');
  console.log('Output: voices_js_append.txt, voices_html_append.txt, lang_names_append.txt');
}

main();
