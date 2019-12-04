 (function () {
     //from https://github.com/imperugo/NodeJs-Sample/blob/master/Logging/WinstonSample
     //http://tostring.it/2014/06/23/advanced-logging-with-nodejs/
     //https://github.com/flatiron/winston
     'use strict';
     /*globals require,module,process*/
     var path = require('path'),
         fs = require('fs'),
         /*config = require('../config/config'),
        path = require('path'),
        */
         
         config = require( path.join(__dirname, '../config/config.js'));
         winston = require('winston');
     // winston.emitErrs = true;
     // Create the "log" folder if it doesn't exist


     // Create the "sift" folder if it doesn't exist
     var dir = config.logDir;
     fs.exists(config.logDir, function (exists) {
         if (!exists) {
             console.log('Creating directory ' + dir);
             fs.mkdir(dir, function (err) {
                 if (err) {
                     console.log('Error creating ' + dir);
                     process.exit(1);
                 } else {
                     return;
                 }
             });
         }
     });

     const logger = winston.createLogger({

         level: 'info',
         format: winston.format.json(),
         defaultMeta: {
             service: 'user-service'
         },
         transports: [
        new winston.transports.File({
                 level: 'info',
                 filename: path.join(config.logDir, config.logFile),
                 handleExceptions: true,
                 //json: true,
                 maxsize: 5242880, //5MB
                 maxFiles: 5,
                 colorize: false
             }),
        new winston.transports.Console({
                 level: 'debug',
                 handleExceptions: true,
                 // json: false,
                 colorize: true
             })
    ],
         exitOnError: false
     });

     module.exports = logger;
     module.exports.stream = {
         write: function (message, encoding) {
             logger.info(message);
         }
     };
 }());
