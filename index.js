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
// Challenge 4: Format the phone number as: (xxx) xxx-xxxx
function formatPhoneNumber(input) {
    // Convert to string in case it's a number
    var str = String(input);
    // Check if input has exactly 10 characters/numbers
    if (str.length !== 10 || !/^\d{10}$/.test(str)) {
        throw new Error("Invalid phone number input");
    }
    // Extract the area code, central office code, and line number
    var areaCode = str.substring(0, 3);
    var centralOfficeCode = str.substring(3, 6);
    var lineNumber = str.substring(6, 10);
    // Return the formatted phone number
    return "(".concat(areaCode, ") ").concat(centralOfficeCode, "-").concat(lineNumber);
}
// Test the function
var phoneNumber = data[0].phone;
console.log('Phone Number:', formatPhoneNumber(phoneNumber));
