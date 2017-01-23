var crypto = require('crypto');
var exports = {};

var uuidFromName = function(name){
   var md5 = crypto.createHash('md5');
   md5.update(name);
   var d = md5.digest('hex');
   d[6] &= 0x0F;
   d[6] |= 0x30;
   d[8] &= 0x3F;
   d[8] |= 0x80;
   return d;
}

exports.named = uuidFromName;
module.exports = exports;
