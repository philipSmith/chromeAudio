# chromeAudio
Demonstrates bug in electron's chromium browser html audio element

We are using Node.js 12.13.0, Chromium 80.0.3987.158, and Electron 8.2.0.

### Expected behavior:

Page will have 3 audio elements ready to play.

### Actual behavior:

Only 2 elements, the mp3 and wav audio, will play. The aif will not.
This has been tested with mime types audio/aif, audio/aiff and
audio/x-aiff.

git clone https://github.com/philipSmith/chromeAudio.git
cd chromeAudio
npm install --save-dev electronjs
npm start
