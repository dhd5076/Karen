/**
 * @file Auth Middleware
 */
var User = require('../models/User');
var response = require('../utils/response');
var logger = require('../utils/logger');

var DEBUG = true;

 module.exports = function(req, res, next) {
    if(DEBUG) {
        req.isAuthenticated = true;
        next();
        return;
    }
    if(req.query.hasOwnProperty('api_key')) {
        User.findOne({ api_key : req.query.api_key})
        .then((user) => {
            if(user) {
                req.isAuthenticated = true;
                req.user = user;
                next();
            } else {
                res.send(response.generate(null, "Invalid API Key"))
            }
        })
        .catch((error) => {
            res.send(response.generate(null, error.message));
        })
    } else {
        req.isAuthenticated = req.session.hasOwnProperty('user');
        next();
    }
}