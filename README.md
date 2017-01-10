# google-voice-recognition

You have to set:

- `TRANSCRIPTION_RECEIVER_URL`
- `GCLOUD_PROJECT`
- `GOOGLE_APPLICATION_CREDENTIALS`
- `GOOGLE_RAW`

eg:

```javascript
process.env.GCLOUD_PROJECT = "hey-bob-desktop";
process.env.GOOGLE_APPLICATION_CREDENTIALS = "/home/pi/bob/bob.json";
process.env.GOOGLE_RAW. = `/home/pi/bob/google-voice-recognition/resources/bob.raw`;
process.env.TRANSCRIPTION_RECEIVER_URL = "http://localhost:8080/transcription"
```
