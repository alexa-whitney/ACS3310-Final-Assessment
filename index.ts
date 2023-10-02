import { capitalize } from 'string-o-matic';

const D = require('ticktalk');
const data = require('./data.json');

// Challenge 0: Import the data.json file into this file
// see above

// Challenge 1: Print the first_name and last_name and convert the first letter to uppercase

console.log(`${capitalize(data[0].first_name)} ${capitalize(data[0].last_name)}`);

// Challenge 2: Print the purchased date to a date and format it as: Month Day, Year

const purchasedDate = new D(data[0].purchased);
console.log(`Purchased: ${purchasedDate.format('M d, Y')}`);

// Challenge 3: Print out last payment showing the date as "when". Ex. 'Last Payment: 2 days ago'
const lastPaymentDate = new D(data[0].lastpayment);
console.log(`Last Payment: ${lastPaymentDate.when()}`);

// Challenge 4: Format the phone number as: (xxx) xxx-xxxx
export default function formatPhoneNumber(input: string | number): string {
  // Convert to string in case it's a number
  const str = String(input);

  // Check if input has exactly 10 characters/numbers
  if (str.length !== 10 || !/^\d{10}$/.test(str)) {
    throw new Error('Invalid phone number input');
  }

  // Extract the area code, central office code, and line number
  const areaCode = str.substring(0, 3);
  const centralOfficeCode = str.substring(3, 6);
  const lineNumber = str.substring(6, 10);

  // Return the formatted phone number
  return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}

// Test the function
const phoneNumber = data[0].phone;
console.log('Phone Number:', formatPhoneNumber(phoneNumber));
