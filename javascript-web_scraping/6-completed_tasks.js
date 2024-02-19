#!/usr/bin/node
const request = require('request');
const apiURL = process.argv[2];
request(apiURL, function (err, response, body) {
  if (err) {
    console.error(err);
  }
  const todos = JSON.parse(body);
  const todosObject = {};
  for (const todo of todos) {
    if (todo.completed) {
      todosObject[todo.userId] = (todosObject[todo.userId] ?? 0) + 1;
    }
  }
  console.log(todosObject);
});
