const accountId = 14453
let accountEmail = "nazir@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // it undefined

// accountId = 2 // not allowed to change the constant 

accountEmail = "tiger@google.com"
accountPassword = "123232"
accountCity = "Ludiana"

console.log(accountId);

/*
Prefer Not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

