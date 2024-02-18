#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiURL = `https://swapi-api.hbtn.io/api/films/${movieId}/`;
request(url, function(err, response, body) {
  if (err) {
    console.error(err);
  }
  function (body) {
    console.log(body);
  }
});
