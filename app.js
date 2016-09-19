var express = require('express');
var routes = require('./routes');
var app = express();

var cheeses = [
	{
		"name": "Cheddar",
		"strength": 3
	},
	{
		"name": "Leicester",
		"strength": 1
	},
	{
		"name": "Brie",
		"strength": 1000
	},
	{
		"name": "Babybell",
		"strength": 1000
	}
];
app.get("/" , function(req,res,next) {
	var body = req.body;
 // res.send({"time":req.time.toString()});
 	 res.send(cheeses)});

app.get("/cheese/:Parameter",function(req,res,next){
	var id = req.params.Parameter;
	res.send(cheeses[id-1]);
});
app.listen(3000 , function(){
  console.log('app running on port 3000');
});

