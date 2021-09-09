'use strict';

const { app } = require('electron');
const ioHook = require('iohook');

ioHook.on('mousemove', (event) => {
    console.log(event);
});

ioHook.start();

app.whenReady().then(() => {
    // do stuff
});