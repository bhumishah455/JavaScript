// Object Literal

// const user = {
//     username: "hitesh",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Constructor

/*
new Keyword : 1.create empty object (instance), 2.call constructor function, 3.this keyword inject for current values.
*/

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
//console.log(userOne.constructor);
console.log(userOne);
//console.log(userTwo);
