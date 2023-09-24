#!/usr/bin/node
/* script that prints the title of a Star Wars movie where the episode number matches a given integer.

The first argument is the movie ID
You must use the Star wars API with the endpoint https://swapi-api.hbtn.io/api/films/:id
You must use the module request */

const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;
request.get(url, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    const json = JSON.parse(response.body);
    console.log(json.title);
  }
});
