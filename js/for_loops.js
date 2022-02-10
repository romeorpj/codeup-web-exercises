let showMultiplicationTable = () => {
// //    ***7s TABLE
// //    show 7X ? up to 10
// //    concatenate 7 * num
// //    log out the response
//     for(let i = 0; i < 11; i++){
//         console.log(`7 x ${i} = ${7*i}`)
//     }

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
    let n = 9;
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            string += i;
        }
        string += "\n";
    }
    console.log(string);

// //***    FOR LOOP COUNTDOWN FROM 100 BY 5
// //    Ask if ++ is the same +=
//     for (let i = 100; i >= 5 ; i-=5) {
//         console.log(i)
//     }




    // TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)
// for(let i=0;i <=30;i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }


// // TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's divisible by 5.
// //  -> If it's neither print "I'm not playing"
// //  -> Print "marco polo" if it's divisible by 3 and 5.
//     for(let i=0;i <=40;i++) {
//         if(i % 3 === 0 && i % 5 === 0 ) {
//             console.log(`MARCO POLO ${i}: is divisible by both 3 and 5`)
//         }else if(i % 3 === 0){
//             console.log(`MARCO ${i}: your number is divisible by 3`)
//         }else if(i % 5 === 0){
//             console.log(`POLO ${i}: your number is divisible by 5`)
//         }else{
//             console.log(`I'M NOT PLAYING: your number ${i} is not divisible by 3 or 5`)
//         }
//
//     }
}

console.log(showMultiplicationTable());

