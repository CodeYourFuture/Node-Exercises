//Load the 'express' library which makes it easier
//to handle HTTP conversations:
const express = require("express");

const app = express();

//You can read basics about routing here:
//http://expressjs.com/en/starter/basic-routing.html

//Here, we register some handlers for different routes.
//(You can add more routes.)
app.get("/", function (request, response) {
    response.send("Hello CYF");
});

app.get("/two", function (request, response) {
    response.send("Another route");
});

app.get("/numbers", function(request, response) {
  const someData = [1, 2, 3];
  response.json(someData);
});

//Tell the server to start listening for requests.
//This will prevent the program from exiting.
//It will keep running, and when a matching request
//comes in, it will call the handlers we registered above.
app.listen(3000);
