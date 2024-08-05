const name = ["bhumi", "shreya", "Vijay","Ayush"]
const city = ["Pune", "Banglore", "Chennai","Kolkata"]
//  name.push(city)

//  console.log(name);
// console.log(name[4][1]);


//1st way
// const all_peopel = name.concat(city)
// console.log(all_peopel);

//2nd way
// const another_array = [...name, ...city]
// console.log(another_array)

// const another_array = [1,2,3, [4,5,6], 7, [6, 7, [4,5]] ]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Bhumi"))
// console.log(Array.from("Bhumi"))

// // got an empty array
// console.log(Array.from({name:"Bhumi"}))  //interview Que

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2,score3))