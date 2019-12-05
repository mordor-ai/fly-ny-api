/*global exports, __dirname,require,process*/
var path = require('path');
exports.logDir = path.join(__dirname, '../logs/');//process.env.MOBVINO_LOG_DIR || 
exports.logFile = 'fly-ny-api.log';
exports.listenPort = '3010';
exports.listenPortHttp = '92';
exports.listenPortUpload = '3011';
exports.listenPortUploadHttp = '91';
//Amadeus API KEY
exports.amadeusClientId: 'REPLACE_BY_YOUR_API_KEY';
exports.amadeusClientSecret: 'REPLACE_BY_YOUR_API_SECRET';
