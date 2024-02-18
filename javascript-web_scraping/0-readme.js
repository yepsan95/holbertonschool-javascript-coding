#!/usr/bin/node
const process = require('process');
const filePath = process.argv[1];
fs = require('fs');

fs.readFile(filePath, 'utf8' (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
