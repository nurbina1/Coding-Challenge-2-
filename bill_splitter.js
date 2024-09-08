//Calculate the tip using ternary operator
let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
console.log('Initial logic for calculating tip using ternary ');


console.log("The bill was " + bill + ", the tip was " + tip + ", and the total value is " + (bill + tip));

function calculateTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

console.log("Tip for $100 bill: " + calculateTip(100));


const bills = [275, 40, 430, 125, 555, 44];
const tips = bills.map(bill => calculateTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);

console.log("Bills: " + bills); 
console.log("Tips: " + tips);
console.log("Total: " + total);

