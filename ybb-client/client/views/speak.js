Template.speak.events({
  'click .button.speak' (event, template) {
     
    const action = event.currentTarget.dataset.action;
    if (action) {
      streamingMicRecognize();
    }
  }
});

function streamingMicRecognize() {


  record = require('node-record-lpcm16');
  speech = require('@google-cloud/speech');
  //console.log(speech);

  /*
  
  const client = new speech.SpeechClient();

  

  const encoding = "LINEAR16";
  const sampleRateHertz = 16000;
  const languageCode = "en-US";

  const request = {
    config: {
      encoding: encoding,
      sampleRateHertz: sampleRateHertz,
      languageCode: languageCode,
    },
    interimResults: false, // If you want interim results, set this to true
  };

  // Create a recognize stream
  const recognizeStream = client.streamingRecognize(request).on('error', console.error)
    .on('data', data =>
      process.stdout.write(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : `\n\nReached transcription time limit, press Ctrl+C\n`
      )
    );

  // Start recording and send the microphone input to the Speech API
  record.start({
    sampleRateHertz: sampleRateHertz,
    threshold: 0,
    verbose: false,
    recordProgram: 'rec', // Try also "arecord" or "sox"
    silence: '10.0',
  }).on('error', console.error).pipe(recognizeStream);

  console.log('Listening, press Ctrl+C to stop.');
  */
}