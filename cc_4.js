//Task 1 - Customer Discounts

let purchaseAmount = 150; //Declare a variable purchaseAmount with a value
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1;
    finalAmount -= discount;
}; //Use an if statement to appy a discount if the amount is greater than $100

console.log(`Final amount after discount: $${finalAmount}`); //Log the final amount to the console using a template literal

//Task 2 - Sales Report

let sales = [120, 85, 200, 150, 90];
let totalSales = 0 //Declare an array sales with at least five sales figures

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}; //Use a for loop to calculate the total sales

console.log(`Total Sales: $${totalSales}`); //Log the total sales to the console using a template literal

//Task 3 - Inventory Depletion

let stock = 10; //Declare a variable stock with an initial value of 10

while (stock > 0) {
    console.log(`Stock Remaining: ${stock}`);
    stock--;
}; //Use a while loop to decrease stock until it reaches zero

console.log("Stock is Zero"); //Log each decrement to the console using a template literal

//Task 4 - Customer Survey

let responses = 0; //Declare a variable responses with an initial value of zero

do {
    console.log(`Collected Responses: ${responses}`);
    responses++;
} while (responses < 3); //Use a do...while loop to collect responses, simulating user input with responses++ until it reaches 3

console.log(); //Log each response count to the console using a template literal

//Task 5 - Employee

let employee = {
    name: "Alice",
    position: "Manager",
    salary: 7500
}; //Declare an object employee with properties: { name: "Alice", position: "Manager", salary: 75000 }

for (const key in employee) {
    console.log(`${key}: ${employee[key]}`);
}; //Use a for...in loop to iterate through the object properties and log it to the console

//Task 6 - Product Listings

let products = ["Laptop", "Mouse", "Keyboard"]; //Declare an array products with at least three product names

for (const product of products) {
    console.log(`Product: ${product}`);
} //Use a for...of loop to display each product and log it to the console

//Task 7 - Order Processing

let orders = [101, 102, 103]; //Declare an array orders with at least three order IDs

orders.forEach(orderId => {
    console.log(`Order ID: ${orderId}`);
}); //Use the forEach() method to log each order ID to the console using a template literal

//Task 8 - Tax Calculation

function calculateTax(amount, taxRate) {
    const tax = amount * taxRate; //Write a function calculateTax that takes an amount and tax rate
    return tax; //Return the calculated tax.
};

let amount = 100;
const taxRate = 0.1;
const tax = calculateTax(amount, taxRate); //

console.log("Amount:", amount)
console.log("Tax Rate:", taxRate)
console.log("Calculated Tax:", tax) //Log the result to the console using a template literal