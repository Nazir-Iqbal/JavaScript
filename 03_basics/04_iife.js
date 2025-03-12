// immediately invoked function expressions


(function chai(){
    // named iife
    console.log('DB connected')
})(); // this semicolon is necessay to the endpoint for the iife

((name) => {
    console.log(`DB connected two ${name}`)
})('Nazir')