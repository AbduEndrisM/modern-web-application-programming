

// #1
/*  
setImmediate() is actually a special timer that runs in a separate phase of the
 event loop. It uses a libuv API that schedules callbacks to execute after the 
 poll phase has completed. */

/* 
 setImmediate() vs setTimeout()
setImmediate() and setTimeout() are similar, but behave in different ways depending on when they are called.

setImmediate() is designed to execute a script once the current poll phase completes.
setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.

 */
/* 
The order in which the timers are executed will vary depending on the context in which 
they are called. If both are called from within the main module, then timing will be 
bound by the performance of the process (which can be impacted by other applications 
running on the machine).
 */
/* 
However, if you move the two 
calls within an I/O cycle, the immediate callback is always executed first: */


// #2
/* process.nextTick()
process.nextTick() is not technically part of the event loop. Instead, the 
nextTickQueue will be processed after the current operation is completed, regardless
 of the current phase of the event loop */

//  process.nextTick() fires immediately on the same phase
// setImmediate() fires on the following iteration or 'tick' of the event loop


// #3 - 10 core modules

const os = require('os');
const dns = require('dns');
const crypto = require('crypto');
const http = require('http');
const http2 = require('http2');
const net = require('net');
const https = require('https');
const fs = require('fs');
const EventEmitter = require('events');
const process = require('process');
const path = require('path');
const tls = require('tls');