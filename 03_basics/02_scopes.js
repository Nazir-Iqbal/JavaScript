let a = 300;

// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     console.log(`Inner : ${a}`)
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Nazir"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one();

// if(true){
//     const username = "Nazir"

//     if(username === "Nazir"){
//         const website = "youtube"
//         console.log(username + website)
//     }
//     // console.log(website)
// }

// console.log(username);


// ++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}


addtwo(5);
const addtwo = function(num){ // expressions
    return num + 2
}
