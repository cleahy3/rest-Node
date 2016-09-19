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
app.use(function(req,res,next){
	
	var newCheese={
		name : 'Cheese String',
		strength :'0.5'
	}
	req.body=newCheese,
	next();
});
app.get("/" , function(req,res,next) {
	var body = req.body;
 // res.send({"time":req.time.toString()});
 	 res.send(cheeses)
});

app.get("/cheese/:id",function(req,res,next){
	var id = req.params.id;
	res.send(cheeses[id-1]);
	
});
app.post("/cheese/new",function(req,res,next){

	cheeses.push(req.body);
	res.send('Item Added '+req.body);
});
app.listen(3000 , function(){
  console.log('app running on port 3000');
});

