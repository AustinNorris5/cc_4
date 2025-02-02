//Task 1: Customer Discounts

let purchaseAmount = 150; //Declare a variable purchaseAmount with a value
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1;
    finalAmount -= discount;
}; //Use an if statement to appy a discount if the amount is greater than $100

console.log(`Final amount after discount: $${finalAmount}`); //Log the final amount to the console using a template literal

