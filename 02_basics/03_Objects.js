// by using constructor we create singleton object

// by using literals, singleton can not created

// Object Literal   // name, age, location all internally treated as String

const mySymbol = Symbol("Key1")


const JsUser = {
    name : "Bhumi",
    "full name" : "Bhumi Shah",
    [mySymbol] : "mykey1",
     age : 18,
    location : "Pune",
    email : "bhumi@gmail.com",
    isLoggedIn : "false",
    lastLoginDay : ["Monday", "Tuesday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySymbol])     // access symbol syntax (interview que)

JsUser.email = "bhumi@chatgpt.com"

// After applying freeze method on object, we not able to change any value in a object
Object.freeze(JsUser)


JsUser.email = "bhumi@microsoft.com"
console.log(JsUser);

//function

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


