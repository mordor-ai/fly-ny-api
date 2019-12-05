(function () {
    'use strict';
    var cron = require('node-cron'),
        logger = require('./config/logger.js'),
        Amadeus = require('amadeus');

    var amadeus = new Amadeus({
  clientId: config.amadeusClientId,
  clientSecret: config.amadeuClientSecret
});
    logger.info('fly-ny-api server starting');
    cron.schedule('* * * * *', () => {
        logger.info('running a task every minute');
    });
}());
