// function sayMyName(){
//     console.log("Nazir")
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// function addTwoNumbers(number1, number2){
//     // let result = number1+number2
//     // return result;

//     return number1+number2;
// }

// number1 and number2 are parameters
// addTwoNumbers(3,4); // 3 and 4 are arguments

// const result = addTwoNumbers(3,5)
// console.log(`Result: ${result}`)

// function loginUserMessage( username = "sam"){
//     if(!username){ // undefined is false by defination
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Nazir"))
// console.log(loginUserMessage())

// rest operator
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Nazir",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 199
})

const myNewArray = [200,400,500,100]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))