// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element);
// }

// console.log(element);

// for(let i = 1; i<= 10; i++){
//     console.log(`outer loop value: ${i}`)
//     for(let j = 1; j<=10; j++){
//         // console.log(`Inner loop value ${j} and outer loop value ${i}`);
//         console.log(i + '*' + j + ' = ' + i*j);
//     }
// }

// let myArray = ['Flash','Batman','Superman'];
// console.log(myArray.length);

// for(let i=0;i<myArray.length;i++){
//     console.log(myArray[i]);
// }

// break and continue

for(let i=0;i<=20;i++){
    if(i == 5){
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of i ${i}`);
}