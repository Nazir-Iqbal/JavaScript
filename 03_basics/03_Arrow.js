const user = {
    username: "Nazir",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// this is a reference to the object that is executing the current function.
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // empty object

// function coffee(){
//     let username = "Nazir"
//     console.log(this.username);// cannot use this in the objects
// }

// coffee();

// const barfi = () => {
//     let usernmae = "Nazir"
//     console.log(this);
// }

// barfi()

// const add = (num1,num2) => {
//     return num1 + num2;
// }

// implicit return 
// const add = (num1,num2) => num1+num2
// const add = (num1,num2) => (num1+num2)

const add = (num1,num2) => ({username : "Nazir"}) // return turning the object

console.log(add(2,4))
