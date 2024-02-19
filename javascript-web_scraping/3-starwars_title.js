#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiURL = `https://swapi-api.hbtn.io/api/films/${movieId}/`;
request(apiURL, function (err, response, body) {
  if (err) {
    console.error(err);
  }
  const jsonString = body;
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject.title);
});
