const https = require('https');
let voices = {
	australian: {
		language: 'en-AU',
		male: [
			['en-AU-Wavenet-B'],
			['en-AU-Wavenet-D']
		],
		female: [
			['en-AU-Wavenet-A'],
			['en-AU-Wavenet-C']
		]
	},
	british: {
		language: 'en-GB',
		male: [
			['en-GB-Wavenet-B'],
			['en-GB-Wavenet-D']
		],
		female: [
			['en-GB-Wavenet-A'],
			['en-GB-Wavenet-C'],
		]
	},
	american: {
		language: 'en-US',
		male: [
			['en-US-Wavenet-B'],
			['en-US-Wavenet-D'],
		],
		female: [
			['en-US-Wavenet-A'],
			['en-US-Wavenet-C'],
			['en-US-Wavenet-E'],
			['en-US-Wavenet-F']
		]
	}
}

let languages = [
	"american",
	"australian",
	"british"
];

let genders = [
	"male",
	"female"
];

const makeHttpCall = async (options) => {
	try {
		return new Promise((resolve) => {
			var req = https.request(options, res => {
				res.setEncoding('utf8');
				var returnData = "";
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

const getVoice = (language, gender) => {
	gender = (gender == 'random') ? randomItem(genders) : gender;
	language = (language == 'random') ? randomItem(languages) : language;
	let voice = randomItem(voices[language][gender]);
	let data = {
		languageCode: voices[language].language,
		gender: gender,
		voice: voice[0]
	}
	return data;
}

const getAudioFile = async (txt, data) => {
	// console.log(`data1: ${JSON.stringify(data, null, 2)}`);
	let options = {
		host: 'texttospeech.googleapis.com',
		port: 443,
		path: '/v1/text:synthesize',
		headers: {
			'Content-Type': 'application/json',
			"charset": 'utf-8',
			"X-Goog-Api-Key": `${data.key}`
		},
		body: {
			'input': {
				'ssml': `<speak>${txt}</speak>`
			},
			'voice': {
				'languageCode': data.languageCode,
				'name': data.voice,
				'ssmlGender': data.gender
			},
			'audioConfig': {
				// "sampleRateHertz": 48000,
				"speakingRate": "0.90",
				'audioEncoding': 'MP3'
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

			let voice = getVoice(config.language, config.gender);
			voice.key = key.speech_api;
			// msg.voice = voice;

			let audioContent = getAudioFile(txt, voice);
			audioContent.then((value) => {
				if (value.error) {
					node.status({ fill: "red", shape: "ring", text: 'API error' });
					node.error(value.error);
				} else {
					try {
						// console.log('getting file:');
						var load = value.replace(/\s+/g, '');      // remove any whitespace
						//var load = value.replace(/[\t\r\n\f]+/g,'');
						//var load = value;
						if (regexp.test(load) && (load.length % 4 === 0)) {
							value = Buffer.from(load, 'base64');
							node.status({ fill: "green", shape: "dot", text: `${voice.languageCode} - ${voice.gender}` });
							msg.payload = value;
							node.send(msg);
						}
						else {
							node.log("Not a Base64 string - maybe we should encode it...");
							value = Buffer.from(value).toString('base64');
							node.status({ fill: "green", shape: "ring", text: `${voice.languageCode} - ${voice.gender}` });
							msg.payload = value;
							// RED.util.setMessageProperty(msg, node.property, value);
							node.send(msg);
						}
					} catch (error) {
						node.status({ fill: "red", shape: "dot", text: 'error' });
						node.error(error);
					}
				}
			});
		});
	}

	RED.nodes.registerType("wavenet", WavenetNode);

	function WavenetConfigNode(n) {
		RED.nodes.createNode(this, n);
		this.speech_api = n.speech_api;
	}
	RED.nodes.registerType("wavenet-config", WavenetConfigNode);
}