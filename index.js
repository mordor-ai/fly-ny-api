/*

jslint maxerr: 10, es6, node, single, for, bitwise, for, multivar

*/
(function () {
    "use strict";
    var cron = require("node-cron"),
        config = require("./config/config.js"),
        logger = require("./config/logger.js"),
        Amadeus = require("amadeus");

    var amadeus = new Amadeus({
        clientId: config.amadeusClientId,
        clientSecret: config.amadeusClientSecret,
        hostname: config.amadeusEnvironnment,
        logLevel: config.amadeusLogLevel
    });


    // Flight Choice Prediction
    amadeus.shopping.flightOffers.get({
        origin: config.departureCode,
        destination: config.arrivalCode,
        departureDate: "2020-04-01"
    }).then(function (response) {
        return amadeus.shopping.flightOffers.prediction.post(
            JSON.stringify(response.result)
        );
    }).then(function (response) {
        logger.info(response.data);
    }).catch(function (responseError) {
        logger.error(responseError);
    });


    logger.info("fly-ny-api server starting");
    cron.schedule("* * * * *", () => {
        logger.info("running a task every minute");

    });
}());
