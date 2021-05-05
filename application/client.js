'use strict';

require('net');
require('dns');
const https = require('https');
const http = require('http');

http.get('http://opentelemetry.io/', () => {}).on('error', (e) => {
  console.error(e);
});

https.get('https://opentelemetry.io/', () => {}).on('error', (e) => {
  console.error(e);
});

https.get('https://opentelemetry.io/', { ca: [] }, () => {}).on('error', (e) => {
  console.error(e);
});
