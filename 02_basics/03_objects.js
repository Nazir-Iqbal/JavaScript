// singleton
// object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Nazir",
    "full name": "Nazir Iqbal",
    [mySym]: "myKey", // using for the symbol in the object
    age: 21,
    location: "Nazir@google.com",
    isLoggedIn: false,
    lastLoginFays: ["Monday", "Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "Nazir@zs.com"
// Object.freeze(JsUser) // changes cannot be made
JsUser.email = "Nazir@google.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello deer users")
}

JsUser.greeting2 = function(){
    console.log(`Hello deer users, ${this["full name"]}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2())