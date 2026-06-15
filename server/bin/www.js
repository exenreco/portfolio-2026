#!/usr/bin/env node

import createDebug from 'debug';
import http from 'http';
import { server as expressServer } from '../src/server.js';

createDebug('ets-server:server');

const SERVER = {

  port: null,

  server: null,

  address: null,

  // Normalize a port into a number, string, or false.
  normalizePort: (val) => {
    const port = parseInt(val, 10);

    // named pipe
    if (isNaN(port)) return val;

    // port number
    if (port >= 0) return port;

    return false;
  },

  // Event listener for HTTP server "error" event.
  onError: (error) => {
    if (error.syscall !== 'listen') throw error;

    let bind = '', msg;

    switch (SERVER.port) {
      case typeof SERVER.port === 'string':
        bind.concat('Pipe ', SERVER.port);
        break;
      default:
        bind.concat('Port ', SERVER.port);
        break;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        msg = bind.concat(bind, ' requires elevated privileges');
        console.error(msg);
        createDebug(msg);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        msg = bind.concat(bind, ' is already in use');
        console.error(msg);
        debug(msg);
        process.exit(1);
        break;
      default:
        createDebug(error);
        throw error;
        break;
    }
  },

  //Event listener for HTTP server "listening" event.
  onListening() {
    let bind = '', msg;

    switch (SERVER.address) {
      case typeof SERVER.address === 'string':
        bind = '';
        bind.concat('Pipe ', SERVER.address);
        break;
      case typeof SERVER.address === 'object':
         bind = '';
         bind.concat('Port ', SERVER.address.port);
        break;
      default:
        bind = '';
        bind.concat('Port ', SERVER.port);
        break;
    }
    msg = '';
    msg.concat('Listening on ', bind);
    createDebug(msg);
  },

  init: () => {

    createDebug('portfolio:server');

    // set the server port
    SERVER.port = SERVER.normalizePort(process.env.PORT || '3000');
    expressServer.set('port', SERVER.port);

    // create the HTTP server
    SERVER.server = http.createServer(expressServer);

    // set the server address
    SERVER.address = SERVER.server.address();

    // Listen on provided port, on all network interfaces.
    SERVER.server.listen(SERVER.port);
    SERVER.server.on('error', SERVER.onError);
    SERVER.server.on('listening', SERVER.onListening);
  }
};

SERVER.init();
