let showMultiplicationTable = ()=> {
//    ***7s TABLE
//    show 7X ? up to 10
//    concatenate 7 * num
//    log out the response
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

//***    1 -9 PYRAMID
    let str = "";
    // i is outer loop
    for (let i = 1; i <= 10; i++) {
        // j is inner loop
        for (let j = 1; j <= i; j++) {
            str += j
        }
        // str += "\n"
    }

    let n = 5; // height of pattern
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
        // Internal loop
        for (let j = 1; j <= i; j++) {
            string += i;
        }
        string += "\n";
    }
    console.log(string);


}
console.log(showMultiplicationTable());

