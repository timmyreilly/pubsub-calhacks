'use strict';

var _ = require('underscore');  
var model = require('../models/images');

/**
 * Send badges to model 
 */
exports.save = function (req, res, next) {
    var images = _.clone(req.body);
    model.save(images, function(err){
        if(err) return res.json(503, { error: true }); 
        next(); 
        model.trim(); 
    }); 
};

/**
 * Send badges to pub/sub socket in model 
 */
exports.send = function (req, res, next) { 
    var images = _.clone(req.body); 
    model.send(images, function(err){
        if (err) return res.json(503, {error: true }); 
        res.json(200, { error: null });
    });  
}; 

/**
 * Get 15 images from model 
 */

exports.get = function(req, res){
    model.get(function(err, data){
        if (err) return res.json(503, {error: true }); 
        res.json(200, data);
    });
}; 