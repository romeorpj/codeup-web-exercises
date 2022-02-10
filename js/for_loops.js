let showMultiplicationTable = () => {
//    ***7s TABLE
//    show 7X ? up to 10
//    concatenate 7 * num
//    log out the response
    for(let i = 0; i < 11; i++){
        console.log(`7 x ${i} = ${7*i}`)
    }

//*** ISODDISEVEN FOR LOOP
//    generate 10 random numbers between 20 and 200
    //log whether the numbers are odd or even

//         for(let i = 0; i < 11; i++){
//             let min = Math.ceil(20);
//             let max = Math.floor(200);
//             let random = Math.floor(Math.random() * (max - min) + min);
//             if(random % 2 === 0){
//                 console.log(`${random} is even`)
//             }else{
//                 console.log(`${random} is odd`)
//             }
// }

// //***    1 -9 PYRAMID
//
//     // rows and cols = 9;
//     let num = 9;
//     let collector = "";
//     //manage rows
//     for (let row = 1; row <= num; row++) {
//         //for every row, run colums col amount of times
//         for (let col = 1; col <= row; col++) {
//             console.log(row)
//         }
//         console.log("\n");
//     }



// //***    FOR LOOP COUNTDOWN FROM 100 BY 5
// //    Ask if ++ is the same +=
//     for (let i = 100; i >= 5 ; i-=5) {
//         console.log(i)
//     }


}
console.log(showMultiplicationTable());

