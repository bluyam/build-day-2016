'use strict';

var express = require('express');
var firebase = require('firebase');

var ref = new Firebase('https://sizzling-heat-3815.firebaseio.com');

// var usersRef = ref.child("Allies");

// usersRef.set({
	
// });

var app = express();

//Sets up jade for express
app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

//Route
app.get('/', function(req, res) {
	//Send data to the client
	res.render('index');
});

app.listen(3000, function() {
	console.log("The frontend server is running on port 3000.");
});