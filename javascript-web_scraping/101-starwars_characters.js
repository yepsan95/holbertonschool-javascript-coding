#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiURL = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(apiURL, function (err, response, body) {
  if (err) {
    console.error(err);
    return;
  }
  const film = JSON.parse(body);
  const characters = film.characters;

  function fetchCharacter (index) {
    if (index >= characters.length) {
      return;
    }

    request(characters[index], function (err, response, body) {
      if (err) {
        console.error(err);
        return;
      }

      const character = JSON.parse(body);
      console.log(character.name);
      fetchCharacter(index + 1);
    });
  }

  fetchCharacter(0);
});
