
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

       */

       const id = Symbol('123')
       const anotherId = Symbol('123')

       console.log(id === anotherId);   //false

       const bigNumber = 3417892637478883n;  //bigInt

/*

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  object function
       Object  =>  object


JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
*/

// Non-primitive 

const heros = ["shaktiman","naagraj","xyz"] // array

let myObj = {
       name: "bhumi",
       age: 22
}

const myFunction = function(){
       console.log("Hello World");
}

// dataType ka type => check by typeof


// ***************Memory**********************************

/*
1. Heap -> (Non-primitive)  if we do any changes, directly happen at original place/memory.

2. Stack -> (primitive)  if we do any changes, happen at copy of an object, not to original place 

*/

// stack
let myYouTubename = "bhumishah"

let anothername = myYouTubename
anothername = "chaiaurcode"

console.log(myYouTubename)
console.log(anothername)

//heap

let userOne = {
       email: "user@gmail.com",
       upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "bhumi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

