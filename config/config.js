/*

jslint maxerr: 10, es6, node, single, for, bitwise, for, multivar

*/
/*global exports, __dirname,require,process*/
var path = require("path");
exports.logDir = path.join(__dirname, "../logs/"); //process.env.MOBVINO_LOG_DIR ||
exports.logFile = "fly-ny-api.log";
exports.listenPort = "3010";
exports.listenPortHttp = "92";
exports.listenPortUpload = "3011";
exports.listenPortUploadHttp = "91";
//Amadeus API KEY
///https://developers.amadeus.com/my-apps/ny-fly
exports.amadeusClientId = "1ZOmfHhFbR4bj4hDBbz9LBwtXRV0AMRn";
exports.amadeusClientSecret = "VJYztNKi2OrabXuL";
exports.amadeusEnvironnment = "test"; //process.env.AMADEUS_ENV
exports.amadeusLogLevel = "debug";
//https://fr.wikipedia.org/wiki/Liste_des_codes_AITA_des_a%C3%A9roports/P
exports.departureCode = "PAR";
exports.arrivalCode = "NYC";
