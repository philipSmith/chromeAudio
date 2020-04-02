// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var mp3 = document.getElementById('mp3')
var wav = document.getElementById('wav')
var aif = document.getElementById('aif')

mp3.src = './Test.mp3'
wav.src = './Test.wav'
aif.src = './Test.aif'
