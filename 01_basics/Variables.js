const accountId = 12345
let accountEmail = "xyz@gmail.com"
var accountPassword = "1234544"
accountCity = "Jaipur"
let accountName

//  accountId = 2  //not aalowed to change const
console.log(accountId);

accountEmail = "abcgmail.com"
accountPassword = "23412"
accountCity = "Pune"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountName])