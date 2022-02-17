'use strict';

const IDLE_WARNING_SEC = 270;

const _ = require('lodash');
const { app } = require('electron');
const ioHook = require('iohook');
const { getActiveProcessName } = require('windows-active-process');
const sound = require('sound-play');
const path = require('path');
const log4js = require('log4js');
const logger = log4js.getLogger('app');
logger.level = 'debug';

let timer = null;
resetTimer();

function doIdleWarning() {
    sound.play(path.join(__dirname, './sfx/NaviHeyListen.mp3'));
    logger.info('warning, idle for too long!');
    timer = null;
}

function isRuneScapeActive() {
    const activeProcess = getActiveProcessName();
    return activeProcess != null &&
            activeProcess.endsWith('rs2client.exe');
}

function resetTimer() {
    if (!isRuneScapeActive()) {
        logger.debug('RuneScape window not active, not resetting timer');
        return;
    }
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(doIdleWarning, IDLE_WARNING_SEC * 1000);
    logger.debug('mouse moved, resetting timer');
}

ioHook.on('mousemove', _.debounce(resetTimer, 100));

ioHook.start();

app.whenReady().then(() => {
    logger.info('electron ready');
});