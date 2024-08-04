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