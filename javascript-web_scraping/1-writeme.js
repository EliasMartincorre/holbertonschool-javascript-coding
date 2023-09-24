#!/usr/bin/node
const fs = require('fs');
const pathfile = process.argv[2];

fs.writeFile(pathfile, process.argv[3], 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  }
});
