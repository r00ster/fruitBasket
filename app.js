const fs = require('fs');

const Utils = require('./utils.js');

const input = require('./input.json');

const output = Utils.buildFruitBasketObject(input);

let json = JSON.stringify(output, null, 2);

fs.writeFile('output.json', json, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
