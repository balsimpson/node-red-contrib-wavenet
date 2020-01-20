# node-red-contrib-wavenet
## Convert text to speech using Google Wavenet voice.

### Update: Now with 66 voices. Added options to adjust speaking rate, pitch, volume, sample rate and audio encoding.

Wavenet voice represents a new way of creating synthetic speech, using a **WaveNet** model, the same technology used to produce speech for Google Assistant, Google Search, and Google Translate.

Takes a `string` as an input. Returns a `base64` encoded array buffer. Attach a file node to save it as an MP3 on your disk.

![main flow](https://imgur.com/WyF9hBt.png)


## Inputs

Voice (_string_)
- Choose a specific voice or random

Speaking rate (_number_ | 0.25 to 4.0)
- In the range of 0.25 to 4.0. 1.0 is the normal native speed. 2.0 is twice as fast, and 0.5 is half as fast.

Pitch (_number_ | -20 to +20)
- In the range -20.0 to 20.0. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.

Volume (_number_ | -6 to +6)
- A value of -6.0 (dB) will play at approximately half the amplitude and a value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal.

Sample rate (_number_)
- The synthesis sample rate (in hertz). When this is specified, the synthesizer will honor this request by converting to the desired sample rate.

Audio encoding (_string_)
- The format of the audio byte stream.
</dl>

## Output

payload (_string_ | base64)
- A base64-encoded string that is wrapped in containers according to the encoding specified.