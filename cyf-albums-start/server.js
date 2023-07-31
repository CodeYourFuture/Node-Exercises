const express = require("express");
const app = express();

const albums = require("./albums.json");

app.get('/', function (request, response) {
  response.send('PUT /album/2 should update the album with ID 2')
});

app.get("/albums", function (request, response){
  response.json(albums);
});

app.get("/album/:albumId", function (request, response){
  let album = album.filter((album) => album.id == request.params.albumId)

  response.json(album[0]);
});

// Update this route. You should update the album with Id albumID.
// It should not add to the list of albums.

// Test your API works by updating the The Beatles album to "Magical Mystery Tour"
app.put("/albums/:albumID", function (request, response) {
  console.log("PUT /albums route");
})

app.listen(3000);
