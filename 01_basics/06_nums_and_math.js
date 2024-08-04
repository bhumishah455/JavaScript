const score = 400
console.log(score);

const balance = new Number(100)  //specifically convert value to number
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.46738
console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString())  //convert to US number
console.log(hundreds.toLocaleString('en-IN'))  //convert to US indian number

//****++++++++++++++++++ Math ++++++++++++++++**********

// console.log(Math);
// console.log(Math.abs(-5));  //convert neg to positive
// console.log(Math.round(4,6))
// console.log(Math.ceil(4.8));
// console.log(Math.floor(4.2));
// console.log(Math.min(3,6,1,2,5));

console.log(Math.random());  // print any value between 0 to 1
console.log(Math.random);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//Imp
console.log(Math.floor(Math.random() * (max - min + 1)) + min);