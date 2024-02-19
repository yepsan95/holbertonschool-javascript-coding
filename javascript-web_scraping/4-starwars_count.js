#!/usr/bin/node
const request = require('request');
const apiURL = process.argv[2];
request(apiURL, function (err, response, body) {
  if (err) {
    console.error(err);
  }
  const jsonString = body;
  const jsonObject = JSON.parse(jsonString);
  let wedgeAntillesCount = 0;
  const wedgeURL = 'https://swapi-api.hbtn.io/api/people/18/';
  for (const movie of jsonObject.results) {
    if (movie.characters.includes(wedgeURL)) {
      wedgeAntillesCount++;
    }
  }
  console.log(wedgeAntillesCount);
});
