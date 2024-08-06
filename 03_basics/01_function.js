
// function addTwoNumbers(number1, number2){   // parameters
//     console.log(number1 + number2)
// }

// addTwoNumbers(3,5)   //arguments
// addTwoNumbers(3, "a")   
// addTwoNumbers(3, "5") 
// addTwoNumbers(3,null) 
// const result = addTwoNumbers(4,6)
// console.log("Result is: "+result)    // undefined


// function addTwoNumbers(number1, number2){   // parameters
    //  let result = number1 + number2
    //  return result                         // after return statement nothing is executed in function
//        return number1 + number2 
// }

// const result = addTwoNumbers(4,6)
// console.log("Result is: "+result) 

function loginUserMessage(username){
   //  if(username === undefined){
        if(!username){
        console.log("Please enter a username")
        return
    }
     return `${username} is just logged in`
 }

//  console.log(loginUserMessage("Bumi"))
 //   console.log(loginUserMessage(""))   
  //console.log(loginUserMessage())        // if we pass empty string it print undefined

  function loginUserMessage(username="RINKY"){
         if(!username){
         console.log("Please enter a username")
         return
     }
      return `${username} is just logged in`
  }
  //console.log(loginUserMessage())
  console.log(loginUserMessage("Bhumi")) 
 