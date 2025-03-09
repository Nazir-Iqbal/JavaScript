// const tinderUser = new Object() // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.idLoggedIn = false;

// console.log(tinderUser)

// const regularUser = {
//     email: "som@gmail.com",
//     fullname:{
//         userfullname: {
//             firstname: "Nazir",
//             lastname: "Iqbal"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.lastname)
// console.log(regularUser['fullname']['userfullname']['lastname'])

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

// const obj3 = {...obj1,...obj2,...obj4} // spread operator

// console.log(obj3)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('idLoggedIn'))


const course = {
    coursename: "tiger hunting",
    price: "999",
    courseInstructor: "Nazir"
}

// destructuring of the object
const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log(instructor);

// API
// {
//     "name": "Nazir",
//     "coursename": "js in hindi",
//     "price":"free"
// }

