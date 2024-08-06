// inspect -> console get print value as window
// and in node (coding platform) -> {}

const user = {
    username : "Bhumi",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

    user.welcomeMessage()
    user.username = "sam"
    user.welcomeMessage()
    // console.log(this)

// function chai(){
//     let username = "bhumi"
//     console.log(this.username) //this-> only work in object not in function (undefined)
// }
// chai()

// const chai = function(){
//     let username = "bhumi"
//     console.log(this.username)   //undefined
// }


// Arrow function

// const chai = () => {
//     let username = "bhumi"
//     // console.log(this.username)   //undefined
//     console.log(this)              //{}
// }
// chai()

//Explicit 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit
//const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "bhumi"})

console.log(addTwo(3,4))


