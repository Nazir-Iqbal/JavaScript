// Stack (Primitive), Heap (Non-Primitive)

let myName = "kali"

let anothername = myName
anothername = "Tiger"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "nazir@gmail.com"

console.log(userOne)
console.log(userTwo)