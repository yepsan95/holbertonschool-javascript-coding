#!/usr/bin/node
const request = require('request');
const apiURL = process.argv[2];
const characterId = 18;
request(apiURL, function (err, response, body) {
  if (err) {
    console.error(err);
  }
  const jsonString = body;
  const films = JSON.parse(jsonString).results;
  let wedgeAntillesCount = 0;
    for (const film of films) {
      for (const character in film.characters) {
        if (character.includes(`${characterId}`)) {
          wedgeAntillesCount++;
        }
      }
    }
  console.log(wedgeAntillesCount);
});
