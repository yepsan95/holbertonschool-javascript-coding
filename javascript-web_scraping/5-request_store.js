#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const filePath = process.argv[3];
request(URL, function (err, response, body) {
  if (err) {
    console.error(err);
  }
  const contents = body;
  fs.writeFile(filePath, contents, 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
