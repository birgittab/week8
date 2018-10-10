// src/api.js

const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => { //request, response
	//fill in your code that:
	//1. set's the status code to 200
	
	res.status(200);

	//2. and returns an object with the greeting
	res.send({greeting: "Hello, " + req.params.name + "!" });  
	//Hint: "req.params.name"
});

module.exports = app;



