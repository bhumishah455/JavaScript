// inspect-> console and actualy node.js(code environment) global space are different

// function one(){
//     const username = "bhumi"

//     function two(){
//         const website = "Utube"
//         console.log(username)
//     }
//    // console.log(website)

//     two()
// }
// one()

if(true){
    const username = "Bhumi"
    if(username === "Bhumi") {
        const website = " youtube"
        console.log(username + website)
    }
   // console.log(website)
}

// console.log(username)

// ++++++++++++++++ Interesting ++++++++++++

// Hoisting Concept 

//before function defination we can able to call that function

console.log(addOne(3))   

function addOne(num1){
    return num1 + 1;
}
// console.log(addOne(3))   




// while using const we can not call function before its declaration, shows error
//console.log(addTwo(3))   

// define function using const also work(act as variable)
const addTwo =  function(num1){
    return num1 + 2;
}

// console.log(addTwo(3))