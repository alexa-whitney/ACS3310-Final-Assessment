// Challenge 0: Import the data.json file into this file
const data = require('./data.json');

// Challenge 1: Print the first_name and last_name and convert the first letter of each name to uppercase
import { capitalize } from 'string-o-matic';
console.log(capitalize(data[0].first_name) + ' ' + capitalize(data[0].last_name));
