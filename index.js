"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Challenge 0: Import the data.json file into this file
var data = require('./data.json');
// Challenge 1: Print the first_name and last_name and convert the first letter of each name to uppercase
var string_o_matic_1 = require("string-o-matic");
console.log((0, string_o_matic_1.capitalize)(data[0].first_name) + ' ' + (0, string_o_matic_1.capitalize)(data[0].last_name));
// Challenge 2: Print the purchased date to a date and format it as: Month Day, Year
var D = require('ticktalk');
var purchasedDate = new D(data[0].purchased);
console.log('Purchased: ' + purchasedDate.format('M d, Y'));
// Challenge 3: Print out last payment showing the date as "when". Ex. 'Last Payment: 2 days ago'
var lastPaymentDate = new D(data[0].lastpayment);
console.log('Last Payment: ' + lastPaymentDate.when());
