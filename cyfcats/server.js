const express = require('express');
const app = express();

app.use(express.static('public'));

const handleIndex = (request, response)=> response.sendFile(__dirname + '/views/index.html');
const handleJSON = (request, response) => response.sendFile(__dirname + '/views/cats.json');

//register some routes
app.get('/', handleIndex);
app.get('/index.html', handleIndex);
app.get('/cats.json', handleJSON);

// listen for requests :)
const listener = app.listen(3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
