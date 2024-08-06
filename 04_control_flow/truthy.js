// const userEmail = "b@gmail.com"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }


// const userEmail = ""                                 // copy -> shift+alt+down arrow key

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values (string ke andar -> truthy value)
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// on inspect -> console
// false == 0   //true
// false == ''  //true
// 0 == ''      //true


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Nullish Coalescing Operator (??): null undefined
/*
The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its
 left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/

let val1;
// val1 = 5 ?? 10       // val1=5
// val1 = null ?? 10    //val1 = 10
// val1 = undefined ?? 15   //val1 = 15
val1 = null ?? 10 ?? 20     //val1 = 10

console.log(val1);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
