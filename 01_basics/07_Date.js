// Dated -- > type of Object

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleTimeString())

// console.log(typeof myDate)   //object

// Js the date month is starting with index '0'
// let myNewDate = new  Date(2024,0,23)  
// console.log(myNewDate)

//adding time
// let myDate1 = new  Date(2024,0,23,5,3)  
// console.log(myDate1.toLocaleString())

// let myDate1 = new  Date("2023-01-23") 
let myDate2 = new  Date("01-23-2024")  //followed in india
// console.log(myDate1.toLocaleString())
// console.log(myDate2.toLocaleString())

//TimeStamp
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myDate2.getTime())  //comparision must do in milliseconds

// //but we want in seconds then divide by 1000
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())  //start index with '0'
console.log(newDate.getMonth() + 1) 

// `${newDate.getMonth()} and The time is...`

newDate.toLocaleString('default', {
    weekday : "long"
})
console.log(newDate)

