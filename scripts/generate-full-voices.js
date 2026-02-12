#!/usr/bin/env node
/**
 * Builds full TSV from voices-data.js and outputs to stdout (or file).
 */
const { CHIRP3_HD, RU_CHIRP3, CHIRP3_FULL_LANGS, EXTRA } = require('./voices-data.js');

const CHIRP3_GENDER = Object.fromEntries(CHIRP3_HD.map(([name, g]) => [name, g]));

const rows = [];

// Chirp3-HD full (30 voices) for all languages in CHIRP3_FULL_LANGS
for (const lang of CHIRP3_FULL_LANGS) {
  const prefix = lang + '-Chirp3-HD-';
  for (const [name, gender] of CHIRP3_HD) {
    rows.push([lang, prefix + name, gender]);
  }
}

// Russian: only 8 Chirp3-HD
for (const name of RU_CHIRP3) {
  const gender = CHIRP3_GENDER[name] || 'NEUTRAL';
  rows.push(['ru-RU', 'ru-RU-Chirp3-HD-' + name, gender]);
}

// en-US short names (same 30 as Chirp3-HD) - API accepts "Achernar" for en-US
// Already added as en-US-Chirp3-HD-* above; en-US extra has short names too - they map to Chirp3-HD
// So we skip adding short names as separate rows (same wav as en-US-Chirp3-HD-X). We use full name in API.
// So no duplicate. EXTRA en-US already has the short names - we need to output them with wav = en-US-Chirp3-HD-Name
// Our TSV has voiceName = API name. For short "Achernar" the API name is "Achernar" or "en-US-Chirp3-HD-Achernar"?
// Google docs: for en-US you can use "Achernar". So voiceName in row is "Achernar", and we'll generate key en_US_Achernar, wav "Achernar".
// So we need to add en-US extra voices. For "Achernar" the build script will do wav = voiceName (no hyphen) -> en-US-Chirp3-HD-Achernar. So we need build to use: if voiceName has no hyphen and lang is en-US, wav = lang + '-Chirp3-HD-' + voiceName. So we output row with voiceName "Achernar" and the script will set wav correctly. But then we already have en-US-Chirp3-HD-Achernar from the Chirp3 full loop - so we'd have two keys: en_US_Chirp3_HD_Achernar and en_US_Achernar. Both map to same wav. So we can skip the short names in EXTRA for en-US to avoid duplicate entries, or keep them so user sees "Achernar" as option. I'll keep them - two keys for same voice is ok.

// Extra voices per language
for (const [lang, list] of Object.entries(EXTRA)) {
  for (const [voiceName, gender] of list) {
    rows.push([lang, voiceName, gender]);
  }
}

// Output TSV: Language\tVoice type\tLanguage code\tVoice name\tSSML Gender
const langLabel = (code) => code;
console.log('Language\tVoice type\tLanguage code\tVoice name\tSSML Gender');
for (const [langCode, voiceName, gender] of rows) {
  console.log([langLabel(langCode), 'Premium', langCode, voiceName, gender].join('\t'));
}
