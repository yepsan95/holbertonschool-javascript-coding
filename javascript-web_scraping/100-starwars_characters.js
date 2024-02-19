#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiURL = `https://swapi-api.hbtn.io/api/films/${movieId}/`;
request(apiURL, function (err, response, body) {
  if (err) {
    console.error(err);
  }
  const film = JSON.parse(body);
  for (const characterURL of film.characters) {
    request(characterURL, function (err, response, body) {
      if (err) {
        console.error(err);
      }
      const character = JSON.parse(body);
      console.log(character.name);
    });
  }
});
