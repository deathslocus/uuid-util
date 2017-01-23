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
   return formatAsUuid(d);
}

var formatAsUuid = function(blob){
   var formatted = "";
   for(var i = 0; i < blob.length; i++){
      if(i == 8){
         formatted += "-";
      }
      if(i == 12){
         formatted += "-";
      }
      if(i == 16){
         formatted += "-";
      }
      if(i == 20){
         formatted += "-";
      }
      formatted += blob[i];
   }
   return formatted;
}

exports.format = formatAsUuid;
exports.named = uuidFromName;
module.exports = exports;
