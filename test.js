
var os = require('os');
var test = require('tap').test;
var inerfaceName = require('./interface.js');

var interfaces = os.networkInterfaces();

test('all first items match in name', function(t) {
  Object.keys(interfaces).forEach(function (name) {
    t.equal(inerfaceName(interfaces[name][0].address), name);
  });

  t.end();
});

test('loopback IPv6 and IPv4 address belong to same interface', function(t) {

  t.equal(inerfaceName('::1'), inerfaceName('127.0.0.1'));
  t.end();
});

test('none existing IPs returns null', function(t) {

  t.equal(inerfaceName('0.0.0.0'), null);
  t.end();
});

test('invalid IP throws', function(t) {
  try {
    inerfaceName('12321');
  } catch (e) {
    t.equal(e.message, 'first arguemnt is an invalid IP address');
    t.end();
  }
});
