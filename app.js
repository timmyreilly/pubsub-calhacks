'use strict';

require("dotenv").config();


var express = require('express'); 
var app = express(); 
var images = require('./controllers/images')

app.use(express.json());

app.post('/hello', function(req, res){
    res.send("hello world"); 
});

app.post('/', images.save, images.send); 

app.get('/images', images.get); 

app.listen(process.env.PORT || 8000, function(){
    console.log("App is running on " + process.env.PORT)
}); 