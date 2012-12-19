
var os = require('os');
var net = require('net');

module.exports = function (address, where) {
  if (net.isIP(address) === 0) {
    throw new Error('first arguemnt is an invalid IP address');
  }

  var interfaces = os.networkInterfaces();
  for (var name in interfaces) {
    if (interfaces.hasOwnProperty(name) === false) continue;

    var addresses = interfaces[name];
    for (var i = 0; i < addresses.length; i++) {
      if (addresses[i].address === address) {
        return name;
      }
    }
  }

  return null;
};
