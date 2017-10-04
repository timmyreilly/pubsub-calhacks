'use strict';

var axon = require('axon'); 
var socket = axon.socket('pub'); 

socket.bind(443); 
/**
 * Send an image to the publish socket
 */
exports.send = function(image) {
    socket.send(image); 
}