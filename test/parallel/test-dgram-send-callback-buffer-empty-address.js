'use strict';

const common = require('../common');
const assert = require('assert');
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

const buf = Buffer.alloc(256, 'x');

const onMessage = common.mustCall(function(err, bytes) {
  assert.ifError(err);
  assert.strictEqual(bytes, buf.length);
  client.close();
});

client.send(buf, common.PORT, onMessage);
