# node-red-contrib-wavenet
## Convert text to speech using Google Wavenet voice.

#### Update: Now with 60+ voices with options to adjust speaking rate, pitch, volume, sample rate and audio encoding.

###### Added Danish voices

Wavenet voice represents a new way of creating synthetic speech, using a **WaveNet** model, the same technology used to produce speech for Google Assistant, Google Search, and Google Translate.

Takes a `string` as an input. Returns a `base64` encoded array buffer. Attach a file node to save it as an audio file on your disk.

![main flow](https://raw.githubusercontent.com/balsimpson/node-red-contrib-wavenet/master/wavenet_screenshot.png)

#### Sign in to <a href="https://cloud.google.com/text-to-speech/">Google Developer Console</a> to get a Speech API key.


## Inputs


Payload (_string_)
- Use SSML elements in your text to give it more personality. You can use all elements found [here](https://cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize).

Voice (_string_)
- Choose a specific voice or random

Speaking rate (_number_ | 0.25 to 4.0)
- In the range of 0.25 to 4.0. 1.0 is the normal native speed. 2.0 is twice as fast, and 0.5 is half as fast.

Pitch (_number_ | -20 to +20)
- In the range -20.0 to 20.0. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.

Volume (_number_ | -6 to +6)
- A value of -6.0 (dB) will play at approximately half the amplitude and a value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal.

Sample rate (_number_)
- The synthesis sample rate (in hertz). When this is specified, the synthesizer will honor this request by converting to the desired sample rate. Default is 24000.

Audio encoding (_string_)
- The encoding format of the audio byte stream can be MP3, LINEAR16 or OGG_OPUS
</dl>

## Output

payload (_string_ | base64)
- A base64-encoded string that is wrapped in containers according to the encoding specified.