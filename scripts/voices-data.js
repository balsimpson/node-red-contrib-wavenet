/**
 * Compact voice list: Chirp3-HD names + genders, and per-language extra voices.
 * Used by generate-full-voices.js to output the complete list.
 */

const CHIRP3_HD = [
  ['Achernar', 'FEMALE'], ['Achird', 'MALE'], ['Algenib', 'MALE'], ['Algieba', 'MALE'], ['Alnilam', 'MALE'],
  ['Aoede', 'FEMALE'], ['Autonoe', 'FEMALE'], ['Callirrhoe', 'FEMALE'], ['Charon', 'MALE'], ['Despina', 'FEMALE'],
  ['Enceladus', 'MALE'], ['Erinome', 'FEMALE'], ['Fenrir', 'MALE'], ['Gacrux', 'FEMALE'], ['Iapetus', 'MALE'],
  ['Kore', 'FEMALE'], ['Laomedeia', 'FEMALE'], ['Leda', 'FEMALE'], ['Orus', 'MALE'], ['Puck', 'MALE'],
  ['Pulcherrima', 'FEMALE'], ['Rasalgethi', 'MALE'], ['Sadachbia', 'MALE'], ['Sadaltager', 'MALE'], ['Schedar', 'MALE'],
  ['Sulafat', 'FEMALE'], ['Umbriel', 'MALE'], ['Vindemiatrix', 'FEMALE'], ['Zephyr', 'FEMALE'], ['Zubenelgenubi', 'MALE']
];

// Russian has only 8 Chirp3-HD voices
const RU_CHIRP3 = ['Aoede', 'Charon', 'Fenrir', 'Kore', 'Leda', 'Orus', 'Puck', 'Zephyr'];

// All language codes that have full 30 Chirp3-HD (from user list). Russian handled separately.
const CHIRP3_FULL_LANGS = [
  'af-ZA', 'ar-XA', 'bn-IN', 'bg-BG', 'yue-HK', 'hr-HR', 'cs-CZ', 'da-DK', 'nl-BE', 'nl-NL', 'en-AU', 'en-IN', 'en-GB', 'en-US',
  'et-EE', 'fi-FI', 'fr-CA', 'fr-FR', 'de-DE', 'el-GR', 'gu-IN', 'he-IL', 'hi-IN', 'hu-HU', 'id-ID', 'it-IT', 'ja-JP', 'kn-IN',
  'ko-KR', 'lv-LV', 'lt-LT', 'ml-IN', 'cmn-CN', 'mr-IN', 'nb-NO', 'pl-PL', 'pt-BR', 'pa-IN', 'ro-RO', 'sr-RS', 'sk-SK', 'sl-SI',
  'es-ES', 'es-US', 'sv-SE', 'ta-IN', 'te-IN', 'th-TH', 'tr-TR', 'uk-UA', 'ur-IN', 'vi-VN'
];

// Extra voices per language: [voiceName, gender]. Voice name is full API name (e.g. en-US-Standard-A or short "Achernar" for en-US).
const EXTRA = {
  'af-ZA': [['af-ZA-Standard-A', 'FEMALE']],
  'ar-XA': [
    ['ar-XA-Standard-A', 'FEMALE'], ['ar-XA-Standard-B', 'MALE'], ['ar-XA-Standard-C', 'MALE'], ['ar-XA-Standard-D', 'FEMALE'],
    ['ar-XA-Wavenet-A', 'FEMALE'], ['ar-XA-Wavenet-B', 'MALE'], ['ar-XA-Wavenet-C', 'MALE'], ['ar-XA-Wavenet-D', 'FEMALE']
  ],
  'bn-IN': [
    ['bn-IN-Standard-A', 'FEMALE'], ['bn-IN-Standard-B', 'MALE'], ['bn-IN-Standard-C', 'FEMALE'], ['bn-IN-Standard-D', 'MALE'],
    ['bn-IN-Wavenet-A', 'FEMALE'], ['bn-IN-Wavenet-B', 'MALE'], ['bn-IN-Wavenet-C', 'FEMALE'], ['bn-IN-Wavenet-D', 'MALE']
  ],
  'bg-BG': [['bg-BG-Standard-B', 'FEMALE']],
  'ca-ES': [['ca-ES-Standard-B', 'FEMALE']],
  'yue-HK': [
    ['yue-HK-Standard-A', 'FEMALE'], ['yue-HK-Standard-B', 'MALE'], ['yue-HK-Standard-C', 'FEMALE'], ['yue-HK-Standard-D', 'MALE']
  ],
  'cs-CZ': [['cs-CZ-Standard-B', 'FEMALE'], ['cs-CZ-Wavenet-B', 'FEMALE']],
  'da-DK': [
    ['da-DK-Neural2-F', 'FEMALE'], ['da-DK-Standard-F', 'FEMALE'], ['da-DK-Standard-G', 'MALE'],
    ['da-DK-Wavenet-F', 'FEMALE'], ['da-DK-Wavenet-G', 'MALE']
  ],
  'nl-BE': [
    ['nl-BE-Standard-C', 'FEMALE'], ['nl-BE-Standard-D', 'MALE'], ['nl-BE-Wavenet-C', 'FEMALE'], ['nl-BE-Wavenet-D', 'MALE']
  ],
  'nl-NL': [
    ['nl-NL-Standard-F', 'FEMALE'], ['nl-NL-Standard-G', 'MALE'], ['nl-NL-Wavenet-F', 'FEMALE'], ['nl-NL-Wavenet-G', 'MALE']
  ],
  'en-AU': [
    ['en-AU-Chirp-HD-D', 'MALE'], ['en-AU-Chirp-HD-F', 'FEMALE'], ['en-AU-Chirp-HD-O', 'FEMALE'],
    ['en-AU-Neural2-A', 'FEMALE'], ['en-AU-Neural2-B', 'MALE'], ['en-AU-Neural2-C', 'FEMALE'], ['en-AU-Neural2-D', 'MALE'],
    ['en-AU-News-E', 'FEMALE'], ['en-AU-News-F', 'FEMALE'], ['en-AU-News-G', 'MALE'], ['en-AU-Polyglot-1', 'MALE'],
    ['en-AU-Standard-A', 'FEMALE'], ['en-AU-Standard-B', 'MALE'], ['en-AU-Standard-C', 'FEMALE'], ['en-AU-Standard-D', 'MALE'],
    ['en-AU-Wavenet-A', 'FEMALE'], ['en-AU-Wavenet-B', 'MALE'], ['en-AU-Wavenet-C', 'FEMALE'], ['en-AU-Wavenet-D', 'MALE']
  ],
  'en-IN': [
    ['en-IN-Chirp-HD-D', 'MALE'], ['en-IN-Chirp-HD-F', 'FEMALE'], ['en-IN-Chirp-HD-O', 'FEMALE'],
    ['en-IN-Neural2-A', 'FEMALE'], ['en-IN-Neural2-B', 'MALE'], ['en-IN-Neural2-C', 'MALE'], ['en-IN-Neural2-D', 'FEMALE'],
    ['en-IN-Standard-A', 'FEMALE'], ['en-IN-Standard-B', 'MALE'], ['en-IN-Standard-C', 'MALE'], ['en-IN-Standard-D', 'FEMALE'],
    ['en-IN-Standard-E', 'FEMALE'], ['en-IN-Standard-F', 'MALE'],
    ['en-IN-Wavenet-A', 'FEMALE'], ['en-IN-Wavenet-B', 'MALE'], ['en-IN-Wavenet-C', 'MALE'], ['en-IN-Wavenet-D', 'FEMALE'],
    ['en-IN-Wavenet-E', 'FEMALE'], ['en-IN-Wavenet-F', 'MALE']
  ],
  'en-GB': [
    ['en-GB-Chirp-HD-D', 'MALE'], ['en-GB-Chirp-HD-F', 'FEMALE'], ['en-GB-Chirp-HD-O', 'FEMALE'],
    ['en-GB-Neural2-A', 'FEMALE'], ['en-GB-Neural2-B', 'MALE'], ['en-GB-Neural2-C', 'FEMALE'], ['en-GB-Neural2-D', 'MALE'],
    ['en-GB-Neural2-F', 'FEMALE'], ['en-GB-Neural2-N', 'FEMALE'], ['en-GB-Neural2-O', 'MALE'],
    ['en-GB-News-G', 'FEMALE'], ['en-GB-News-H', 'FEMALE'], ['en-GB-News-I', 'FEMALE'], ['en-GB-News-J', 'MALE'],
    ['en-GB-News-K', 'MALE'], ['en-GB-News-L', 'MALE'], ['en-GB-News-M', 'MALE'],
    ['en-GB-Standard-A', 'FEMALE'], ['en-GB-Standard-B', 'MALE'], ['en-GB-Standard-C', 'FEMALE'], ['en-GB-Standard-D', 'MALE'],
    ['en-GB-Standard-F', 'FEMALE'], ['en-GB-Standard-N', 'FEMALE'], ['en-GB-Standard-O', 'MALE'],
    ['en-GB-Studio-B', 'MALE'], ['en-GB-Studio-C', 'FEMALE'],
    ['en-GB-Wavenet-A', 'FEMALE'], ['en-GB-Wavenet-B', 'MALE'], ['en-GB-Wavenet-C', 'FEMALE'], ['en-GB-Wavenet-D', 'MALE'],
    ['en-GB-Wavenet-F', 'FEMALE'], ['en-GB-Wavenet-N', 'FEMALE'], ['en-GB-Wavenet-O', 'MALE']
  ],
  'en-US': [
    ['Achernar', 'FEMALE'], ['Achird', 'MALE'], ['Algenib', 'MALE'], ['Algieba', 'MALE'], ['Alnilam', 'MALE'],
    ['Aoede', 'FEMALE'], ['Autonoe', 'FEMALE'], ['Callirrhoe', 'FEMALE'], ['Charon', 'MALE'], ['Despina', 'FEMALE'],
    ['Enceladus', 'MALE'], ['Erinome', 'FEMALE'], ['Fenrir', 'MALE'], ['Gacrux', 'FEMALE'], ['Iapetus', 'MALE'],
    ['Kore', 'FEMALE'], ['Laomedeia', 'FEMALE'], ['Leda', 'FEMALE'], ['Orus', 'MALE'], ['Puck', 'MALE'],
    ['Pulcherrima', 'FEMALE'], ['Rasalgethi', 'MALE'], ['Sadachbia', 'MALE'], ['Sadaltager', 'MALE'], ['Schedar', 'MALE'],
    ['Sulafat', 'FEMALE'], ['Umbriel', 'MALE'], ['Vindemiatrix', 'FEMALE'], ['Zephyr', 'FEMALE'], ['Zubenelgenubi', 'MALE'],
    ['en-US-Casual-K', 'MALE'], ['en-US-Chirp-HD-D', 'MALE'], ['en-US-Chirp-HD-F', 'FEMALE'], ['en-US-Chirp-HD-O', 'FEMALE'],
    ['en-US-Neural2-A', 'MALE'], ['en-US-Neural2-C', 'FEMALE'], ['en-US-Neural2-D', 'MALE'], ['en-US-Neural2-E', 'FEMALE'],
    ['en-US-Neural2-F', 'FEMALE'], ['en-US-Neural2-G', 'FEMALE'], ['en-US-Neural2-H', 'FEMALE'], ['en-US-Neural2-I', 'MALE'],
    ['en-US-Neural2-J', 'MALE'], ['en-US-News-K', 'FEMALE'], ['en-US-News-L', 'FEMALE'], ['en-US-News-N', 'MALE'],
    ['en-US-Polyglot-1', 'MALE'],
    ['en-US-Standard-A', 'MALE'], ['en-US-Standard-B', 'MALE'], ['en-US-Standard-C', 'FEMALE'], ['en-US-Standard-D', 'MALE'],
    ['en-US-Standard-E', 'FEMALE'], ['en-US-Standard-F', 'FEMALE'], ['en-US-Standard-G', 'FEMALE'], ['en-US-Standard-H', 'FEMALE'],
    ['en-US-Standard-I', 'MALE'], ['en-US-Standard-J', 'MALE'],
    ['en-US-Studio-O', 'FEMALE'], ['en-US-Studio-Q', 'MALE'],
    ['en-US-Wavenet-A', 'MALE'], ['en-US-Wavenet-B', 'MALE'], ['en-US-Wavenet-C', 'FEMALE'], ['en-US-Wavenet-D', 'MALE'],
    ['en-US-Wavenet-E', 'FEMALE'], ['en-US-Wavenet-F', 'FEMALE'], ['en-US-Wavenet-G', 'FEMALE'], ['en-US-Wavenet-H', 'FEMALE'],
    ['en-US-Wavenet-I', 'MALE'], ['en-US-Wavenet-J', 'MALE']
  ],
  'et-EE': [['et-EE-Standard-A', 'MALE']],
  'fil-PH': [
    ['fil-PH-Standard-A', 'FEMALE'], ['fil-PH-Standard-B', 'FEMALE'], ['fil-PH-Standard-C', 'MALE'], ['fil-PH-Standard-D', 'MALE'],
    ['fil-PH-Wavenet-A', 'FEMALE'], ['fil-PH-Wavenet-B', 'FEMALE'], ['fil-PH-Wavenet-C', 'MALE'], ['fil-PH-Wavenet-D', 'MALE'],
    ['fil-ph-Neural2-A', 'FEMALE'], ['fil-ph-Neural2-D', 'MALE']
  ],
  'fi-FI': [['fi-FI-Standard-B', 'FEMALE'], ['fi-FI-Wavenet-B', 'FEMALE']],
  'fr-CA': [
    ['fr-CA-Chirp-HD-D', 'MALE'], ['fr-CA-Chirp-HD-F', 'FEMALE'], ['fr-CA-Chirp-HD-O', 'FEMALE'],
    ['fr-CA-Neural2-A', 'FEMALE'], ['fr-CA-Neural2-B', 'MALE'], ['fr-CA-Neural2-C', 'FEMALE'], ['fr-CA-Neural2-D', 'MALE'],
    ['fr-CA-Standard-A', 'FEMALE'], ['fr-CA-Standard-B', 'MALE'], ['fr-CA-Standard-C', 'FEMALE'], ['fr-CA-Standard-D', 'MALE'],
    ['fr-CA-Wavenet-A', 'FEMALE'], ['fr-CA-Wavenet-B', 'MALE'], ['fr-CA-Wavenet-C', 'FEMALE'], ['fr-CA-Wavenet-D', 'MALE']
  ],
  'fr-FR': [
    ['fr-FR-Chirp-HD-D', 'MALE'], ['fr-FR-Chirp-HD-F', 'FEMALE'], ['fr-FR-Chirp-HD-O', 'FEMALE'],
    ['fr-FR-Neural2-F', 'FEMALE'], ['fr-FR-Neural2-G', 'MALE'], ['fr-FR-Polyglot-1', 'MALE'],
    ['fr-FR-Standard-F', 'FEMALE'], ['fr-FR-Standard-G', 'MALE'], ['fr-FR-Studio-A', 'FEMALE'], ['fr-FR-Studio-D', 'MALE'],
    ['fr-FR-Wavenet-F', 'FEMALE'], ['fr-FR-Wavenet-G', 'MALE']
  ],
  'de-DE': [
    ['de-DE-Chirp-HD-D', 'MALE'], ['de-DE-Chirp-HD-F', 'FEMALE'], ['de-DE-Chirp-HD-O', 'FEMALE'],
    ['de-DE-Neural2-G', 'FEMALE'], ['de-DE-Neural2-H', 'MALE'], ['de-DE-Polyglot-1', 'MALE'],
    ['de-DE-Standard-G', 'FEMALE'], ['de-DE-Standard-H', 'MALE'], ['de-DE-Studio-B', 'MALE'], ['de-DE-Studio-C', 'FEMALE'],
    ['de-DE-Wavenet-G', 'FEMALE'], ['de-DE-Wavenet-H', 'MALE']
  ],
  'el-GR': [['el-GR-Standard-B', 'FEMALE'], ['el-GR-Wavenet-B', 'FEMALE']],
  'gl-ES': [['gl-ES-Standard-B', 'FEMALE']],
  'gu-IN': [
    ['gu-IN-Standard-A', 'FEMALE'], ['gu-IN-Standard-B', 'MALE'], ['gu-IN-Standard-C', 'FEMALE'], ['gu-IN-Standard-D', 'MALE'],
    ['gu-IN-Wavenet-A', 'FEMALE'], ['gu-IN-Wavenet-B', 'MALE'], ['gu-IN-Wavenet-C', 'FEMALE'], ['gu-IN-Wavenet-D', 'MALE']
  ],
  'he-IL': [
    ['he-IL-Standard-A', 'FEMALE'], ['he-IL-Standard-B', 'MALE'], ['he-IL-Standard-C', 'FEMALE'], ['he-IL-Standard-D', 'MALE'],
    ['he-IL-Wavenet-A', 'FEMALE'], ['he-IL-Wavenet-B', 'MALE'], ['he-IL-Wavenet-C', 'FEMALE'], ['he-IL-Wavenet-D', 'MALE']
  ],
  'hi-IN': [
    ['hi-IN-Neural2-A', 'FEMALE'], ['hi-IN-Neural2-B', 'MALE'], ['hi-IN-Neural2-C', 'MALE'], ['hi-IN-Neural2-D', 'FEMALE'],
    ['hi-IN-Standard-A', 'FEMALE'], ['hi-IN-Standard-B', 'MALE'], ['hi-IN-Standard-C', 'MALE'], ['hi-IN-Standard-D', 'FEMALE'],
    ['hi-IN-Standard-E', 'FEMALE'], ['hi-IN-Standard-F', 'MALE'],
    ['hi-IN-Wavenet-A', 'FEMALE'], ['hi-IN-Wavenet-B', 'MALE'], ['hi-IN-Wavenet-C', 'MALE'], ['hi-IN-Wavenet-D', 'FEMALE'],
    ['hi-IN-Wavenet-E', 'FEMALE'], ['hi-IN-Wavenet-F', 'MALE']
  ],
  'hu-HU': [['hu-HU-Standard-B', 'FEMALE'], ['hu-HU-Wavenet-B', 'FEMALE']],
  'is-IS': [['is-IS-Standard-B', 'FEMALE']],
  'id-ID': [
    ['id-ID-Standard-A', 'FEMALE'], ['id-ID-Standard-B', 'MALE'], ['id-ID-Standard-C', 'MALE'], ['id-ID-Standard-D', 'FEMALE'],
    ['id-ID-Wavenet-A', 'FEMALE'], ['id-ID-Wavenet-B', 'MALE'], ['id-ID-Wavenet-C', 'MALE'], ['id-ID-Wavenet-D', 'FEMALE']
  ],
  'it-IT': [
    ['it-IT-Chirp-HD-D', 'MALE'], ['it-IT-Chirp-HD-F', 'FEMALE'], ['it-IT-Chirp-HD-O', 'FEMALE'],
    ['it-IT-Neural2-A', 'FEMALE'], ['it-IT-Neural2-E', 'FEMALE'], ['it-IT-Neural2-F', 'MALE'],
    ['it-IT-Standard-E', 'FEMALE'], ['it-IT-Standard-F', 'MALE'], ['it-IT-Wavenet-E', 'FEMALE'], ['it-IT-Wavenet-F', 'MALE']
  ],
  'ja-JP': [
    ['ja-JP-Neural2-B', 'FEMALE'], ['ja-JP-Neural2-C', 'MALE'], ['ja-JP-Neural2-D', 'MALE'],
    ['ja-JP-Standard-A', 'FEMALE'], ['ja-JP-Standard-B', 'FEMALE'], ['ja-JP-Standard-C', 'MALE'], ['ja-JP-Standard-D', 'MALE'],
    ['ja-JP-Wavenet-A', 'FEMALE'], ['ja-JP-Wavenet-B', 'FEMALE'], ['ja-JP-Wavenet-C', 'MALE'], ['ja-JP-Wavenet-D', 'MALE']
  ],
  'kn-IN': [
    ['kn-IN-Standard-A', 'FEMALE'], ['kn-IN-Standard-B', 'MALE'], ['kn-IN-Standard-C', 'FEMALE'], ['kn-IN-Standard-D', 'MALE'],
    ['kn-IN-Wavenet-A', 'FEMALE'], ['kn-IN-Wavenet-B', 'MALE'], ['kn-IN-Wavenet-C', 'FEMALE'], ['kn-IN-Wavenet-D', 'MALE']
  ],
  'ko-KR': [
    ['ko-KR-Neural2-A', 'FEMALE'], ['ko-KR-Neural2-B', 'FEMALE'], ['ko-KR-Neural2-C', 'MALE'],
    ['ko-KR-Standard-A', 'FEMALE'], ['ko-KR-Standard-B', 'FEMALE'], ['ko-KR-Standard-C', 'MALE'], ['ko-KR-Standard-D', 'MALE'],
    ['ko-KR-Wavenet-A', 'FEMALE'], ['ko-KR-Wavenet-B', 'FEMALE'], ['ko-KR-Wavenet-C', 'MALE'], ['ko-KR-Wavenet-D', 'MALE']
  ],
  'lv-LV': [['lv-LV-Standard-B', 'MALE']],
  'lt-LT': [['lt-LT-Standard-B', 'MALE']],
  'ms-MY': [
    ['ms-MY-Standard-A', 'FEMALE'], ['ms-MY-Standard-B', 'MALE'], ['ms-MY-Standard-C', 'FEMALE'], ['ms-MY-Standard-D', 'MALE'],
    ['ms-MY-Wavenet-A', 'FEMALE'], ['ms-MY-Wavenet-B', 'MALE'], ['ms-MY-Wavenet-C', 'FEMALE'], ['ms-MY-Wavenet-D', 'MALE']
  ],
  'ml-IN': [
    ['ml-IN-Standard-A', 'FEMALE'], ['ml-IN-Standard-B', 'MALE'], ['ml-IN-Standard-C', 'FEMALE'], ['ml-IN-Standard-D', 'MALE'],
    ['ml-IN-Wavenet-A', 'FEMALE'], ['ml-IN-Wavenet-B', 'MALE'], ['ml-IN-Wavenet-C', 'FEMALE'], ['ml-IN-Wavenet-D', 'MALE']
  ],
  'cmn-CN': [
    ['cmn-CN-Standard-A', 'FEMALE'], ['cmn-CN-Standard-B', 'MALE'], ['cmn-CN-Standard-C', 'MALE'], ['cmn-CN-Standard-D', 'FEMALE'],
    ['cmn-CN-Wavenet-A', 'FEMALE'], ['cmn-CN-Wavenet-B', 'MALE'], ['cmn-CN-Wavenet-C', 'MALE'], ['cmn-CN-Wavenet-D', 'FEMALE']
  ],
  'cmn-TW': [
    ['cmn-TW-Standard-A', 'FEMALE'], ['cmn-TW-Standard-B', 'MALE'], ['cmn-TW-Standard-C', 'MALE'],
    ['cmn-TW-Wavenet-A', 'FEMALE'], ['cmn-TW-Wavenet-B', 'MALE'], ['cmn-TW-Wavenet-C', 'MALE']
  ],
  'mr-IN': [
    ['mr-IN-Standard-A', 'FEMALE'], ['mr-IN-Standard-B', 'MALE'], ['mr-IN-Standard-C', 'FEMALE'],
    ['mr-IN-Wavenet-A', 'FEMALE'], ['mr-IN-Wavenet-B', 'MALE'], ['mr-IN-Wavenet-C', 'FEMALE']
  ],
  'nb-NO': [
    ['nb-NO-Standard-F', 'FEMALE'], ['nb-NO-Standard-G', 'MALE'], ['nb-NO-Wavenet-F', 'FEMALE'], ['nb-NO-Wavenet-G', 'MALE']
  ],
  'pl-PL': [
    ['pl-PL-Standard-F', 'FEMALE'], ['pl-PL-Standard-G', 'MALE'], ['pl-PL-Wavenet-F', 'FEMALE'], ['pl-PL-Wavenet-G', 'MALE']
  ],
  'pt-BR': [
    ['pt-BR-Neural2-A', 'FEMALE'], ['pt-BR-Neural2-B', 'MALE'], ['pt-BR-Neural2-C', 'FEMALE'],
    ['pt-BR-Standard-A', 'FEMALE'], ['pt-BR-Standard-B', 'MALE'], ['pt-BR-Standard-C', 'FEMALE'], ['pt-BR-Standard-D', 'FEMALE'],
    ['pt-BR-Standard-E', 'MALE'], ['pt-BR-Wavenet-A', 'FEMALE'], ['pt-BR-Wavenet-B', 'MALE'], ['pt-BR-Wavenet-C', 'FEMALE'],
    ['pt-BR-Wavenet-D', 'FEMALE'], ['pt-BR-Wavenet-E', 'MALE']
  ],
  'pt-PT': [
    ['pt-PT-Standard-E', 'FEMALE'], ['pt-PT-Standard-F', 'MALE'], ['pt-PT-Wavenet-E', 'FEMALE'], ['pt-PT-Wavenet-F', 'MALE']
  ],
  'pa-IN': [
    ['pa-IN-Standard-A', 'FEMALE'], ['pa-IN-Standard-B', 'MALE'], ['pa-IN-Standard-C', 'FEMALE'], ['pa-IN-Standard-D', 'MALE'],
    ['pa-IN-Wavenet-A', 'FEMALE'], ['pa-IN-Wavenet-B', 'MALE'], ['pa-IN-Wavenet-C', 'FEMALE'], ['pa-IN-Wavenet-D', 'MALE']
  ],
  'ro-RO': [['ro-RO-Standard-B', 'FEMALE'], ['ro-RO-Wavenet-B', 'FEMALE']],
  'ru-RU': [
    ['ru-RU-Standard-A', 'FEMALE'], ['ru-RU-Standard-B', 'MALE'], ['ru-RU-Standard-C', 'FEMALE'], ['ru-RU-Standard-D', 'MALE'],
    ['ru-RU-Standard-E', 'FEMALE'], ['ru-RU-Wavenet-A', 'FEMALE'], ['ru-RU-Wavenet-B', 'MALE'], ['ru-RU-Wavenet-C', 'FEMALE'],
    ['ru-RU-Wavenet-D', 'MALE'], ['ru-RU-Wavenet-E', 'FEMALE']
  ],
  'sr-RS': [['sr-RS-Standard-B', 'FEMALE']],
  'sk-SK': [['sk-SK-Standard-B', 'FEMALE'], ['sk-SK-Wavenet-B', 'FEMALE']],
  'sl-SI': [],
  'es-ES': [
    ['es-ES-Chirp-HD-D', 'MALE'], ['es-ES-Chirp-HD-F', 'FEMALE'], ['es-ES-Chirp-HD-O', 'FEMALE'],
    ['es-ES-Neural2-A', 'FEMALE'], ['es-ES-Neural2-E', 'FEMALE'], ['es-ES-Neural2-F', 'MALE'], ['es-ES-Neural2-G', 'MALE'],
    ['es-ES-Neural2-H', 'FEMALE'], ['es-ES-Polyglot-1', 'MALE'],
    ['es-ES-Standard-E', 'MALE'], ['es-ES-Standard-F', 'FEMALE'], ['es-ES-Standard-G', 'MALE'], ['es-ES-Standard-H', 'FEMALE'],
    ['es-ES-Studio-C', 'FEMALE'], ['es-ES-Studio-F', 'MALE'],
    ['es-ES-Wavenet-E', 'MALE'], ['es-ES-Wavenet-F', 'FEMALE'], ['es-ES-Wavenet-G', 'MALE'], ['es-ES-Wavenet-H', 'FEMALE']
  ],
  'es-US': [
    ['es-US-Chirp-HD-D', 'MALE'], ['es-US-Chirp-HD-F', 'FEMALE'], ['es-US-Chirp-HD-O', 'FEMALE'],
    ['es-US-Neural2-A', 'FEMALE'], ['es-US-Neural2-B', 'MALE'], ['es-US-Neural2-C', 'MALE'],
    ['es-US-News-D', 'MALE'], ['es-US-News-E', 'MALE'], ['es-US-News-F', 'FEMALE'], ['es-US-News-G', 'FEMALE'],
    ['es-US-Polyglot-1', 'MALE'], ['es-US-Standard-A', 'FEMALE'], ['es-US-Standard-B', 'MALE'], ['es-US-Standard-C', 'MALE'],
    ['es-US-Studio-B', 'MALE'], ['es-US-Wavenet-A', 'FEMALE'], ['es-US-Wavenet-B', 'MALE'], ['es-US-Wavenet-C', 'MALE']
  ],
  'sv-SE': [
    ['sv-SE-Standard-A', 'FEMALE'], ['sv-SE-Standard-B', 'FEMALE'], ['sv-SE-Standard-C', 'FEMALE'], ['sv-SE-Standard-D', 'MALE'],
    ['sv-SE-Standard-E', 'MALE'], ['sv-SE-Standard-F', 'FEMALE'], ['sv-SE-Standard-G', 'MALE'],
    ['sv-SE-Wavenet-A', 'FEMALE'], ['sv-SE-Wavenet-B', 'FEMALE'], ['sv-SE-Wavenet-C', 'MALE'], ['sv-SE-Wavenet-D', 'FEMALE'],
    ['sv-SE-Wavenet-E', 'MALE'], ['sv-SE-Wavenet-F', 'FEMALE'], ['sv-SE-Wavenet-G', 'MALE']
  ],
  'ta-IN': [
    ['ta-IN-Standard-A', 'FEMALE'], ['ta-IN-Standard-B', 'MALE'], ['ta-IN-Standard-C', 'FEMALE'], ['ta-IN-Standard-D', 'MALE'],
    ['ta-IN-Wavenet-A', 'FEMALE'], ['ta-IN-Wavenet-B', 'MALE'], ['ta-IN-Wavenet-C', 'FEMALE'], ['ta-IN-Wavenet-D', 'MALE']
  ],
  'te-IN': [
    ['te-IN-Standard-A', 'FEMALE'], ['te-IN-Standard-B', 'MALE'], ['te-IN-Standard-C', 'FEMALE'], ['te-IN-Standard-D', 'MALE']
  ],
  'th-TH': [['th-TH-Neural2-C', 'FEMALE'], ['th-TH-Standard-A', 'FEMALE']],
  'tr-TR': [
    ['tr-TR-Standard-A', 'FEMALE'], ['tr-TR-Standard-B', 'MALE'], ['tr-TR-Standard-C', 'FEMALE'], ['tr-TR-Standard-D', 'FEMALE'],
    ['tr-TR-Standard-E', 'MALE'], ['tr-TR-Wavenet-A', 'FEMALE'], ['tr-TR-Wavenet-B', 'MALE'], ['tr-TR-Wavenet-C', 'FEMALE'],
    ['tr-TR-Wavenet-D', 'FEMALE'], ['tr-TR-Wavenet-E', 'MALE']
  ],
  'uk-UA': [['uk-UA-Standard-B', 'FEMALE'], ['uk-UA-Wavenet-B', 'FEMALE']],
  'ur-IN': [
    ['ur-IN-Standard-A', 'FEMALE'], ['ur-IN-Standard-B', 'MALE'], ['ur-IN-Wavenet-A', 'FEMALE'], ['ur-IN-Wavenet-B', 'MALE']
  ],
  'vi-VN': [
    ['vi-VN-Neural2-A', 'FEMALE'], ['vi-VN-Neural2-D', 'MALE'],
    ['vi-VN-Standard-A', 'FEMALE'], ['vi-VN-Standard-B', 'MALE'], ['vi-VN-Standard-C', 'FEMALE'], ['vi-VN-Standard-D', 'MALE'],
    ['vi-VN-Wavenet-A', 'FEMALE'], ['vi-VN-Wavenet-B', 'MALE'], ['vi-VN-Wavenet-C', 'FEMALE'], ['vi-VN-Wavenet-D', 'MALE']
  ],
  'eu-ES': [['eu-ES-Standard-B', 'FEMALE']]
};

module.exports = { CHIRP3_HD, RU_CHIRP3, CHIRP3_FULL_LANGS, EXTRA };
