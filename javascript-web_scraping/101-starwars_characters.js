#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiURL = `https://swapi-api.hbtn.io/api/films/${movieId}/`;
async function getCharacterName(characterURL) {
  request(characterURL, function (err, response, body) {
    if (err) {
      console.error(err);
    }
    const character = JSON.parse(body);
	return new Promise(resolve => {
      setTimeout(() => {
      console.log(character.name);
      resolve();
	  }, 100);
    });
  });
}

async function getFilmData(apiURL) {
  request(apiURL, function (err, response, body) {
    if (err) {
      console.error(err);
    }
    const film = JSON.parse(body);
    for (const characterURL of film.characters) {
      await getCharacterName(characterURL);
    }
  }
}

getFilmData(apiURL);
