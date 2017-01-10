// hey.bob
'use strict';
require('shelljs/global');

const Speech = require('@google-cloud/speech');

process.env["GCLOUD_PROJECT"] = "hey-bob-desktop";
process.env["GOOGLE_APPLICATION_CREDENTIALS"] = "../bob.json";

function asyncRecognize (filename) {
  // Instantiates a client
  const speech = Speech();

  const config = {
    // Configure these settings based on the audio you're transcribing
    encoding: 'LINEAR16',
    sampleRate: 16000,
    languageCode: 'fr-FR'
  };

  // Detects speech in the audio file, e.g. "./resources/audio.raw"
  // This creates a recognition job that you can wait for now, or get its result
  // later.
  return speech.startRecognition(filename, config)
    .then((results) => {
      const operation = results[0];
      // Get a Promise represention the final result of the job
      return operation.promise();
    })
    .then((transcription) => {
      //console.log(`Transcription: ${transcription}`);
      return transcription;
    });
}

console.log("Speak when you see the message 'Recording raw data'")
exec(`arecord -D plughw:1,0 -t RAW -f S16_LE -r 16000 -d 5.0 ./resources/bob.raw`)
console.log("I'm talking with Google")

asyncRecognize('./resources/bob.raw').then(res => {
  console.log(`Transcription: ${res[0]}`)
}).catch(err => {
  console.error(err);
})
