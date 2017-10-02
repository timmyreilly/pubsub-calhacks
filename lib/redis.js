'use strict'; 

var redis = require('redis'); 

process.env.REDIS_SERVER_HOST

var client = redis.createClient(6380, 'calhacks.redis.cache.windows.net',
    {
        auth_pass: process.env.AUTH_PASS,
        tls: { servername: 'calhacks.redis.cache.windows.net' }
    }
);

client.on('error', function(err){
    throw err; 
}); 

module.exports = client; 