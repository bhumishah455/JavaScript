// promises -> action do in future (asynchronization)
// state of operation which is guaranteed to complete its execution at some point in future.
// are a way to handle asynchronous operations in JavaScript


// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()                                   // resolve() method means call to below then()
//     }, 1000)
// })

// // then related to resolve
// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// 2nd ex

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// 3rd ex

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Bhumi", email: "bhumi@gmail,com"})
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user);
    
// })

// 4th ex

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// // promiseFour
// // .then((user) => {
// //    //console.log(user.username);   // error
// //    console.log(user);
// //    return user.username           
// // }).then((username) => {
// //     console.log(username);
// // }).catch((error) => console.log(error)                 // 1type using arrow function
// // ).finally(() => console.log("The promise is either resolved or rejected"))

// promiseFour
// .then((user) => {
//    console.log(user);
//    return user.username
// }).then((username) => {
//    console.log(username);
// }).catch(function(error){
//    console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// 5th ex

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// 6th EX

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      //   const data = await response.json()    // error( as to convert string to object it take time, so add await )
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// 7th ex

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);   
})
.catch((error) => console.log(error));

    




