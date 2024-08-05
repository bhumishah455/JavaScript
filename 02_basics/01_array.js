// Js arrays are resizable

const myArr = [1,2,3,4,5]
const flowers = ["rose", "Gulab", "Sunflower"]

const myArr2 = new Array(2,4,1,5,2,3)

// Arrays Methods

 myArr.push(7)
 myArr.pop()

// myArr.unshift(8)    // shift digits to right and add at first position
// myArr.shift()    // shift digits to left and delete 1st position element


console.log(myArr.includes(8))
console.log(myArr.indexOf(3))

const newArr = myArr.join()   // after join get result in string not array

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)
// console.log(myArr2)

//slice and splice  (interview Que)

console.log("A ", myArr)

// last index range not consider //take elements upto 2 index
const myn1 = myArr.slice(1,3)  

console.log(myn1);
console.log("B ", myArr)

//consider last range element also means print element upto 3rd index , bt make changes in original array, the portion which we provide in splice it remove from original array.
const myn2 = myArr.splice(1,3)   
console.log(myn2);

console.log("C ", myArr)



