const coding = ["js", "ruby", "java", "python","cpp"]

// A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation has been completed.
// call back function does not have name

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "java",
        languageFileName: "java"
    },
    {
        language: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.language);
})