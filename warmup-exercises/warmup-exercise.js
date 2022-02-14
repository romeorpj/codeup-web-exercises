// EXERCISE 1:
// Write a function called findAverage that takes in an array of integers representing grades and returns the
// average.
//     Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)
// created using for i. and an option using reduce
(function findAverage() {
    let arr = [95, 74, 86, 100];
    // let numHolder = 0;
    // for (let i of arr) {
    //     numHolder += i;
    // }
    // console.log(numHolder / arr.length)

    let newReduce = arr.reduce((acc,curr)=>{
        return acc + curr;
    },0)
console.log(newReduce / arr.length)
})();
