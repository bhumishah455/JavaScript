let score = "33acv"

console.log(typeof score)    // string
console.log(typeof(score)) // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)    // number
console.log(valueInNumber)              // NaN

/*
When Score convert to number, it give result as below
when score="33" => 33  
when score="33avc" => NaN (not a number) type number
when score="true" => 1 
when score="undefined" => undefined
when score="null" => NaN

*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true , 0 => false
// "" => false
// "bhumi" => true

let number = 33
let StringNumber = String(number)
console.log(StringNumber)
console.log(typeof StringNumber)

// *******************Operation ***********************************

// console.log(2+2);
// console.log(2%3);
// console.log(2**8);

let str1 = "hello"
let str2 = " Bhumi"

let str3 = str1 + str2
console.log(str3);       // hello Bhumi

console.log("1" + 2);  //12
console.log(1 + "2");   //12
console.log("1" + 2 + 2);  // 122
console.log(2 + 2 + "1");   //41

console.log(+true);    //1

console.log("2" > 1);  // automatically convert 2 to number  // true

console.log( null > 0);     //false
console.log( null == 0);    // false
console.log( null >= 0);    //true

console.log( undefined == 0);     //false
console.log( undefined > 0);    // false
console.log( undefined < 0);    //false

//  === (strict equal, check datatype also, datatype also must be same)
//  == if data type not same , it convert it

console.log("2" === 2);  // false





