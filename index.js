(function () {
    'use strict';
    var cron = require('node-cron'),
        logger = require('./config/logger.js');

    logger.info('fly-ny-api server starting');
    cron.schedule('* * * * *', () => {
        logger.info('running a task every minute');
    });
}());
