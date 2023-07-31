const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

app.get("/quotes", function(request, response){
  response.json(quotes);
});

app.listen(3000);
