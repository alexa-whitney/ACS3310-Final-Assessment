"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Challenge 0: Import the data.json file into this file
const data = require('./data.json');
// Challenge 1: Print the first_name and last_name and convert the first letter of each name to uppercase
const string_o_matic_1 = require("string-o-matic");
console.log((0, string_o_matic_1.capitalize)(data[0].first_name) + ' ' + (0, string_o_matic_1.capitalize)(data[0].last_name));
