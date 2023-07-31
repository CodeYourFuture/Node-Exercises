const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get("/", function(request, response) {
  response.sendStatus(200).send("Ask me for /quotes");
});

app.get("/quotes", function(request, response) {
  response.json(quotes);
});

app.listen(3000);
