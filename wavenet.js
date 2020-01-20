const https = require('https');

let voice_options = {
	janjaap: {
		language: 'nl-Nl',
		gender: 'male',
		wav: 'nl-Nl-Wavenet-B',
		text: 'Dutch male'
	},
	kees: {
		language: 'nl-Nl',
		gender: 'male',
		wav: 'nl-Nl-Wavenet-C',
		text: 'Dutch male'
	},
	sjaan: {
		language: 'nl-Nl',
		gender: 'female',
		wav: 'nl-Nl-Wavenet-D',
		text: 'Dutch female'
	},
	bep: {
		language: 'nl-Nl',
		gender: 'female',
		wav: 'nl-Nl-Wavenet-E',
		text: 'Dutch female'
	},
	miep: {
		language: 'nl-Nl',
		gender: 'female',
		wav: 'nl-Nl-Wavenet-A',
		text: 'Dutch female'
	},
	russel: {
		language: 'en-AU',
		gender: 'male',
		wav: 'en-AU-Wavenet-B',
		text: 'Australian male'
	},
	thomas: {
		language: 'en-AU',
		gender: 'male',
		wav: 'en-AU-Wavenet-D',
		text: 'Australian male'
	},
	nicole: {
		language: 'en-AU',
		gender: 'female',
		wav: 'en-AU-Wavenet-A',
		text: 'Australian female'
	},
	mary: {
		language: 'en-AU',
		gender: 'female',
		wav: 'en-AU-Wavenet-C',
		text: 'Australian female'
	},
	brian: {
		language: 'en-GB',
		gender: 'male',
		wav: 'en-GB-Wavenet-B',
		text: 'British male'
	},
	paul: {
		language: 'en-GB',
		gender: 'male',
		wav: 'en-GB-Wavenet-D',
		text: 'British male'
	},
	emma: {
		language: 'en-GB',
		gender: 'female',
		wav: 'en-GB-Wavenet-A',
		text: 'British female'
	},
	amy: {
		language: 'en-GB',
		gender: 'female',
		wav: 'en-GB-Wavenet-C',
		text: 'British female'
	},
	mathew: {
		language: 'en-US',
		gender: 'male',
		wav: 'en-US-Wavenet-B',
		text: 'American male'
	},
	justin: {
		language: 'en-US',
		gender: 'male',
		wav: 'en-US-Wavenet-D',
		text: 'American male'
	},
	joanna: {
		language: 'en-US',
		gender: 'female',
		wav: 'en-US-Wavenet-A',
		text: 'American female'
	},
	ivy: {
		language: 'en-US',
		gender: 'female',
		wav: 'en-US-Wavenet-C',
		text: 'American female'
	},
	kimberly: {
		language: 'en-US',
		gender: 'female',
		wav: 'en-US-Wavenet-E',
		text: 'American female'
	},
	salli: {
		language: 'en-US',
		gender: 'female',
		wav: 'en-US-Wavenet-F',
		text: 'American female'
	},
	ella: {
		language: 'da-DK',
		gender: 'female',
		wav: 'da-DK-Wavenet-A',
		text: 'Danish female'
	},
	amina: {
		language: 'ar-XA',
		gender: 'female',
		wav: 'ar-XA-Wavenet-A',
		text: 'Arabian female'
	},
	amir: {
		language: 'ar-XA',
		gender: 'male',
		wav: 'ar-XA-Wavenet-C',
		text: 'Arabian male'
	},
	chen: {
		language: 'cmn-CN',
		gender: 'female',
		wav: 'cmn-CN-Wavenet-A',
		text: 'Chinese Mandarin female'
	},
	chang: {
		language: 'cmn-CN',
		gender: 'male',
		wav: 'cmn-CN-Wavenet-B',
		text: 'Chinese Mandarin male'
	},
	hu: {
		language: 'cmn-CN',
		gender: 'male',
		wav: 'cmn-CN-Wavenet-C',
		text: 'Chinese Mandarin male'
	},
	mei: {
		language: 'cmn-CN',
		gender: 'female',
		wav: 'cmn-CN-Wavenet-D',
		text: 'Chinese Mandarin female'
	},
	lucie: {
		language: 'cs-CZ',
		gender: 'female',
		wav: 'cs-CZ-Wavenet-A',
		text: 'Czech female'
	},
	sofia: {
		language: 'de-DE',
		gender: 'female',
		wav: 'de-DE-Wavenet-A',
		text: 'German female'
	},
	ben: {
		language: 'de-DE',
		gender: 'male',
		wav: 'de-DE-Wavenet-B',
		text: 'German male'
	},
	lyra: {
		language: 'el-GR',
		gender: 'female',
		wav: 'el-GR-Wavenet-A',
		text: 'Greek female'
	},
	aparna: {
		language: 'en-IN',
		gender: 'female',
		wav: 'en-IN-Wavenet-A',
		text: 'Inidan female'
	},
	rahul: {
		language: 'en-IN',
		gender: 'male',
		wav: 'en-IN-Wavenet-B',
		text: 'Indian male'
	},
	ella: {
		language: 'fi-FI',
		gender: 'female',
		wav: 'fi-FI-Wavenet-A',
		text: 'Finnish female'
	},
	darna: {
		language: 'fil-PH',
		gender: 'female',
		wav: 'fil-PH-Wavenet-A',
		text: 'Filippino female'
	},
	olivia: {
		language: 'fr-CA',
		gender: 'female',
		wav: 'fr-CA-Wavenet-A',
		text: 'French Canadian female'
	},
	liam: {
		language: 'fr-CA',
		gender: 'male',
		wav: 'fr-CA-Wavenet-B',
		text: 'French Canadian male'
	},
	sarah: {
		language: 'fr-FR',
		gender: 'female',
		wav: 'fr-FR-Wavenet-A',
		text: 'French female'
	},
	victor: {
		language: 'fr-FR',
		gender: 'male',
		wav: 'fr-FR-Wavenet-B',
		text: 'French male'
	},
	simran: {
		language: 'hi-IN',
		gender: 'female',
		wav: 'hi-IN-Wavenet-A',
		text: 'Hindi female'
	},
	jai: {
		language: 'hi-IN',
		gender: 'male',
		wav: 'hi-IN-Wavenet-B',
		text: 'Hindi male'
	},
	nora: {
		language: 'hu-HU',
		gender: 'female',
		wav: 'hu-HU-Wavenet-A',
		text: 'Hungarian female'
	},
	melati: {
		language: 'id-ID',
		gender: 'female',
		wav: 'id-ID-Wavenet-A',
		text: 'Indonesian female'
	},
	agung: {
		language: 'id-ID',
		gender: 'male',
		wav: 'id-ID-Wavenet-B',
		text: 'Indonesian male'
	},
	gabriella: {
		language: 'it-IT',
		gender: 'female',
		wav: 'it-IT-Wavenet-A',
		text: 'Italian female'
	},
	antonio: {
		language: 'it-IT',
		gender: 'male',
		wav: 'it-IT-Wavenet-C',
		text: 'Italian male'
	},
	yuna: {
		language: 'ja-JP',
		gender: 'female',
		wav: 'ja-JP-Wavenet-A',
		text: 'Japanese female'
	},
	asahi: {
		language: 'ja-JP',
		gender: 'male',
		wav: 'ja-JP-Wavenet-C',
		text: 'Japanese male'
	},
	misun: {
		language: 'ko-KR',
		gender: 'female',
		wav: 'ko-KR-Wavenet-B',
		text: 'Korean female'
	},
	kyong: {
		language: 'ko-KR',
		gender: 'male',
		wav: 'ko-KR-Wavenet-C',
		text: 'Korean male'
	},
	leah: {
		language: 'nb-NO',
		gender: 'female',
		wav: 'nb-NO-Wavenet-C',
		text: 'Norwegian female'
	},
	lucas: {
		language: 'nb-NO',
		gender: 'male',
		wav: 'nb-NO-Wavenet-B',
		text: 'Norwegian male'
	},
	amelia: {
		language: 'pl-PL',
		gender: 'female',
		wav: 'pl-PL-Wavenet-A',
		text: 'Polish female'
	},
	filip: {
		language: 'pl-PL',
		gender: 'male',
		wav: 'pl-PL-Wavenet-B',
		text: 'Polish male'
	},
	maria: {
		language: 'pt-PT',
		gender: 'female',
		wav: 'pt-PT-Wavenet-A',
		text: 'Portugese female'
	},
	tomas: {
		language: 'pt-PT',
		gender: 'male',
		wav: 'pt-PT-Wavenet-B',
		text: 'Portugese male'
	},
	nadia: {
		language: 'ru-RU',
		gender: 'female',
		wav: 'ru-RU-Wavenet-E',
		text: 'Russian female'
	},
	anatoly: {
		language: 'ru-RU',
		gender: 'male',
		wav: 'ru-RU-Wavenet-B',
		text: 'Russian male'
	},
	laura: {
		language: 'sk-SK',
		gender: 'female',
		wav: 'sk-SK-Wavenet-A',
		text: 'Slovak female'
	},
	lilly: {
		language: 'sv-SE',
		gender: 'female',
		wav: 'sv-SE-Wavenet-A',
		text: 'Swedish female'
	},
	defne: {
		language: 'tr-TR',
		gender: 'female',
		wav: 'tr-TR-Wavenet-A',
		text: 'Turkish female'
	},
	yusuf: {
		language: 'tr-TR',
		gender: 'male',
		wav: 'tr-TR-Wavenet-B',
		text: 'Turkish male'
	},
	alina: {
		language: 'uk-UA',
		gender: 'female',
		wav: 'uk-UA-Wavenet-A',
		text: 'Ukranian female'
	},
	bian: {
		language: 'vi-VN',
		gender: 'female',
		wav: 'vi-VN-Wavenet-A',
		text: 'Vietnamese female'
	},
	danh: {
		language: 'vi-VN',
		gender: 'male',
		wav: 'vi-VN-Wavenet-B',
		text: 'Vietnamese male'
	}
}

let voice_wavs = [
	'janjaap',
	'kees',
	'sjaan',
	'bep',
	'miep',
	'russel',
	'thomas',
	'nicole',
	'mary',
	'brian',
	'paul',
	'emma',
	'amy',
	'mathew',
	'justin',
	'joanna',
	'ivy',
	'kimberly',
	'salli',
	'ella',
	'amina',
	'amir',
	'chen',
	'chang',
	'hu',
	'mei',
	'annya',
	'kuan',
	'lucie',
	'sofia',
	'ben',
	'lyra',
	'aparna',
	'rahul',
	'darna',
	'olivia',
	'liam',
	'sarah',
	'victor',
	'simran',
	'jai',
	'nora',
	'melati',
	'agung',
	'gabriella',
	'antonio',
	'yuna',
	'asahi',
	'misun',
	'kyong',
	'leah',
	'lucas',
	'amelia',
	'filip',
	'ana',
	'maria',
	'tomas',
	'nadia',
	'anatoly',
	'laura',
	'lilly',
	'defne',
	'yusuf',
	'alina',
	'bian',
	'danh'
]

const makeHttpCall = async (options) => {
	try {
		return new Promise((resolve) => {
			var req = https.request(options, res => {
				res.setEncoding('utf8');
				var returnData = '';
				res.on('data', chunk => {
					returnData = returnData + chunk;
				});
				res.on('end', () => {
					let results = JSON.parse(returnData);
					resolve(results);
				});
			});
			if (options.method == 'POST' || options.method == 'PATCH') {
				req.write(JSON.stringify(options.body));
			}
			req.end();
		})
	} catch (error) {
		return `error: ` + error;
	}
}

// Get a random item
const randomItem = (arrayOfItems) => {
	let i = 0;
	i = Math.floor(Math.random() * arrayOfItems.length);
	return (arrayOfItems[i]);
};

const getVoice = (voice) => {
	voice = (voice == 'random') ? randomItem(voice_wavs) : voice;
	let chosen = voice_options[voice];
	let data = {
		languageCode: chosen.language,
		ssmlGender: chosen.gender,
		name: chosen.wav
	}
	return data;
}

const getAudioFile = async (txt, data) => {

	let options = {
		host: 'texttospeech.googleapis.com',
		port: 443,
		path: '/v1/text:synthesize',
		headers: {
			'Content-Type': 'application/json',
			'charset': 'utf-8',
			'X-Goog-Api-Key': `${data.key}`
		},
		body: {
			'input': {
				'ssml': `<speak>${txt}</speak>`
			},
			'voice': {
				'languageCode': data.languageCode,
				'name': data.name,
				'ssmlGender': data.ssmlGender
			},
			'audioConfig': {
				'speakingRate': data.config.rate,
				'pitch': data.config.pitch,
				'volumeGainDb': data.config.volume,
				'sampleRateHertz': data.config.sample,
				'audioEncoding': data.config.encoding,
			}
		},
		method: 'POST'
	};

	let resp = await makeHttpCall(options);
	// console.log(`resp: ${JSON.stringify(resp, null, 2)}`);
	if (resp.error) {
		return { error: resp.error.message };
	} else {
		return resp.audioContent;
	}
}

module.exports = function (RED) {
	function WavenetNode(config) {
		RED.nodes.createNode(this, config);
		var regexp = new RegExp('^[A-Za-z0-9+\/=]*$');
		var node = this;
		node.on('input', function (msg) {
			let key = RED.nodes.getNode(config.key);
			let txt = msg.payload;

			let voice = getVoice(config.voice);
			voice.key = key.speech_api;

			// get audio config options
			voice.config = {
				rate: config.rate,
				pitch: config.pitch,
				volume: config.volume,
				sample: config.sample,
				encoding: config.encoding
			}

			let audioContent = getAudioFile(txt, voice);
			audioContent.then((value) => {
				if (value.error) {
					node.status({ fill: 'red', shape: 'ring', text: 'API error' });
					node.error(value.error);
				} else {
					try {
						// console.log('getting file:');
						var load = value.replace(/\s+/g, '');      // remove any whitespace
						if (regexp.test(load) && (load.length % 4 === 0)) {
							value = Buffer.from(load, 'base64');
							node.status({ fill: 'green', shape: 'dot', text: `${voice.languageCode} - ${voice.ssmlGender}` });
							msg.payload = value;
							node.send(msg);
						}
						else {
							node.log('Not a Base64 string - maybe we should encode it...');
							value = Buffer.from(value).toString('base64');
							node.status({ fill: 'green', shape: 'ring', text: `${voice.languageCode} - ${voice.ssmlGender}` });
							msg.payload = value;
							// RED.util.setMessageProperty(msg, node.property, value);
							node.send(msg);
						}
					} catch (error) {
						node.status({ fill: 'red', shape: 'dot', text: 'error' });
						node.error(error);
					}
				}
			});
		});
	}

	RED.nodes.registerType('wavenet', WavenetNode);

	function WavenetConfigNode(n) {
		RED.nodes.createNode(this, n);
		this.speech_api = n.speech_api;
	}
	RED.nodes.registerType('wavenet-config', WavenetConfigNode);
}