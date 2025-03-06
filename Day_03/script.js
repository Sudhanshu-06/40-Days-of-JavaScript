// 1. Odd or Even?
//  Take a number and find if the number is an odd or even number.
//  Print the number and result in the console.

let number = 10; 

if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}


// 2. Do you have a Driving License?
// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

//  Manage age as a variable.
//  Check if the age is elligible for a driving license and print it on the console accordingly.

let age = 20; 

if (age >= 18) {
    console.log(`You are ${age} years old and eligible for a driving license.`);
} else {
    console.log(`You are ${age} years old and not eligible for a driving license.`);
}


// 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

//  You get 12,300 rupees as your monthly salary.
//  You get a 20% bonus on your annual salary.
//  How much money do you make per annum as a CTC?

let monthlySalary = 12300;
let annualSalary = monthlySalary * 12; 
let bonus = annualSalary * 0.20; 
let CTC = annualSalary + bonus; 

console.log(`Your annual salary is ₹${annualSalary}.`);
console.log(`Your 20% bonus is ₹${bonus}.`);
console.log(`Your total CTC is ₹${CTC}.`);


// 4. Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

//  Create a color variable.
//  Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

let color = "Red";

if (color === "Red") {
    console.log("STOP! The light is Red.");
} else if (color === "Green") {
    console.log("GO! The light is Green.");
} else {
    console.log("Invalid color! Please enter Red or Green.");
}

// 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.

//  Create a units variable. Based on this value you will calculate the total electricity bill for a months.
//  If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
//  If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

let unitsPerDay = 10; 
let costPerUnit = 150; 

let monthlyUnits = unitsPerDay * 30; 
let monthlyBill = monthlyUnits * costPerUnit; 

let annualBill = monthlyBill * 12; 
let discount = annualBill * 0.20; 
let annualBillAfterDiscount = annualBill - discount; 

console.log(`Your monthly electricity bill is ₹${monthlyBill}.`);
console.log(`Your annual electricity bill before discount is ₹${annualBill}.`);
console.log(`Your 20% discount is ₹${discount}.`);
console.log(`Your total annual bill after discount is ₹${annualBillAfterDiscount}.`);


// 6. Leap Year Checker
// Is 2025 a Leap Year?

//  Take year as input.
//  Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

let year = 2025; 

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
    ? `${year} is a Leap Year.` 
    : `${year} is NOT a Leap Year.`;

console.log(isLeapYear);

// 7. Max of Three Numbers
// Find the max number from the lot.

//  Take three numbers and assign them to variables p, q, and r.
//  Now find the maximum of these three numbers using the comparison operators.

let p = 25, q = 42, r = 37; // Change values to test different cases

let max = (p >= q && p >= r) ? p :(q >= p && q >= r) ? q : r;

console.log(`The maximum number is ${max}.`);


// 8. Biwise Doubling
// A tricky one for you

//  Create a variable count and assign a value, say, 5.
//  Now use the Bitwise shift operator to make the number double.
//  Print it on the console.

let count = 5; 

let doubled = count << 1; // Left shift by 1 doubles the number

console.log(`Original number: ${count}`);
console.log(`Doubled number using bitwise shift: ${doubled}`);


