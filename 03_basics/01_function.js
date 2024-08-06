
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
         return                                     // return se console me value print nhi hoti, with return we must write console.log at the time of function calling
     }
      return `${username} is just logged in`
  }
  //console.log(loginUserMessage())
//   console.log(loginUserMessage("Bhumi")) 

// Part 2

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(200))


/*  if we are not sure that how much numbers we pass at time of function calling,
  we use rest/spread operator in defination of function  */

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,467,900))  

function calculateCartPrice(val1, val2,...num1){
    return num1
}
// val1 = 200, val2 = 467
// num1 = [900,455]
// console.log(calculateCartPrice(200,467,900,455))

const user = {
    username : "bhumi",
    price: 400
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({           //instead of writing user separately we also pass in function calling directly.
//     username : "bhumi",
//     price: 400
// })


const myNewArray = [200,500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 600]))
 