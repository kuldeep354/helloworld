/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Kuldeep Singh
*  Student ID: 127966216
*  Date: 12/12/2022 
* 
*  Online (Cyclic) URL: https://vast-plum-narwhal-veil.cyclic.app/ 
* 
********************************************************************************/  


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Kuldeep Singh - 127966216");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);