'use strict'; 

var redis = require('../lib/redis');  
var broadcast = require('../lib/broadcast'); 
/**
 * Save images to database
 * @param {Array} badges
 * @param {Function} callback 
 */
exports.save = function(images, callback) { 
    if (!images.length) return callback(null, null); 
    var image = images.pop();  
    redis.lpush('images', JSON.stringify(image), function(err){
        if(err) return callback(err, null); 
        exports.save(images, callback); 
    });
}

/**
 * Trim down the redis list 
 */
exports.trim = function(){
    redis.ltrim('images', 0, 14);
}; 

/**
 * Send out images to the broadcaster 
 * @param {Array} images
 * @param {Function} callback
 */
exports.send = function(images, callback){
    images.forEach(broadcast.send);
    callback(null, null); 
}; 

/**
 * Get 10 images from redis
 * @param {Function} callback
 */
exports.get = function(callback){
    redis.lrange('iamges', 0, -1, function(err, data){
        if (err) return callback(err, null); 
        callback(null, data.map(JSON.parse)); 
    }); 
}; 