var http = require('http');
var express = require('express');
var app = express();
var fs = require("fs");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongodb = require('mongodb');
var Server = require("mongodb").Server;
var Promise = require('rsvp').Promise;

var MongoClient = mongodb.MongoClient;
var db;
var mongoUrl = 'mongodb://localhost:27017/mydb/';

MongoClient.connect(mongoUrl, function(err, database) {
  if(err) throw err;

  db = database;

  // Start the application after the database connection is ready
  app.listen(8081);
  app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
  console.log("Listening on port 3000");
});

app.get('/getPlaces/:place', function (req, res) {
		var place = req.params.place;
		console.log(place);
			//var takeaway = db.collection("takeaway").find({"title": new RegExp(rest)}).toArray(function (err,document){;
			var rest = place;
			db.collection("Places").find({"title": new RegExp(rest)}).toArray(function (err,document){;
			//res.writeHead(200, {'Content-Type' : 'application/json' ,"Access-Control-Allow-Origin": "*"} );
			//return document;
			res.header("Access-Control-Allow-Origin", "*");
			res.setHeader('Content-type', 'application/json');
			var data = JSON.stringify({document});
			res.send(data);
			console.log(data);
			});
});

app.get('/getMenus/:id', function (req, res) {
	var id = req.params.id;
	db.collection("menus").find({"id": id}).toArray(function (err,document){;
			//res.writeHead(200, {'Content-Type' : 'application/json' ,"Access-Control-Allow-Origin": "*"} );
			//return document;
			res.header("Access-Control-Allow-Origin", "*");
			res.setHeader('Content-type', 'application/json');
			var data = JSON.stringify({document});
			res.send(data);
			console.log(data);
			});
})
	
