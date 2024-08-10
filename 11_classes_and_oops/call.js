// windows -> this give(global value: -> window)
// in node -> this gibe -> {}

// call() -> method ka reference hold krke rakhna, future me use ke liye

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);