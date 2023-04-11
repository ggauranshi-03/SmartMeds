const routes = require('next-routes-extended')();


//Route to specified page
routes
    .add('/record/:address','/details')
    .add('/doctor/:address','/details-doctor');

module.exports = routes;
