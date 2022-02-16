// EXERCISE 1:
// Write a function called findAverage that takes in an array of integers representing grades and returns the
// average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)
// created using for i. and an option using reduce
// (function findAverage() {
//     let arr = [95, 74, 86, 100];
//     // let numHolder = 0;
//     // for (let i of arr) {
//     //     numHolder += i;
//     // }
//     // console.log(numHolder / arr.length)
//
//     let newReduce = arr.reduce((acc,curr)=>{
//         return acc + curr;
//     },0)
// console.log(newReduce / arr.length)
// })();

// WARMUP 2
// Create an object representing a person. It should have properties representing:
//     names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties to the console

let person = {
    names: ["Richard", "Jackson"],
    dob: "11/09/1985",
    occupation: "Software Developer"
}

// Create an object representing a person’s contact info. It should have:
//     phone number
// street address
// state
// postal code
// email address
// Hard code some values in that object, then log it and its properties to the console

let personsContactInfo = {
    address: "1114 some street",
    state: "Tx",
    postal_code: 77232,
    email: "myemail@gmail.com"
}