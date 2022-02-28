// // EXERCISE 1:
// // Write a function called findAverage that takes in an array of integers representing grades and returns the
// // average.
// //     Example input: [95, 74, 86, 100]
// // Example output: 88.75 (edited)
// // created using for i. and an option using reduce
// // (function findAverage() {
// //     let arr = [95, 74, 86, 100];
// //     // let numHolder = 0;
// //     // for (let i of arr) {
// //     //     numHolder += i;
// //     // }
// //     // console.log(numHolder / arr.length)
// //
// //     let newReduce = arr.reduce((acc,curr)=>{
// //         return acc + curr;
// //     },0)
// // console.log(newReduce / arr.length)
// // })();
//
// // WARMUP 2
// // Create an object representing a person. It should have properties representing:
// //     names (an array of strings)
// // date of birth
// // occupation
// // Hard code some values in that object, then log it and its properties to the console
//
//
// // Defines a contact info object
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
// // Defines a person object
// function Person(names, occupation, dob, contactInfo) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
// // makes a new person object instance (by invoking the constructor)
// let person2 = new Person(
//     ["Richard", "Jackson"],
//     "11/09/1985",
//     "Software Developer",
//     new ContactInfo(
//         "333-333-7777",
//         "1114 some street",
//         "San Antonio",
//         "TX",
//         "77232",
//         "myemail@gmail.com"));
//
// console.log(person2.contactInfo.emailAddress);
//
// // Warmup part 4
//
// // We are going to create a method which
// //  allows a user to input their desired amount of names names
// //      use prompt, alert, confirm inside of a while loop
// //     assign each name to an array
// //  once the user decides they are done giving names, end the loop and return the string array
// //  then assigning that returned array by invoking your new function on the Person.names property value!
// //     Things to consider:
// //      Should this be a standalone function or should it be a method on the Person object?
//
// function enterNames() {
//     let nameArr = [];
//     do {
//         let askForName = prompt(`Enter New name `);
//         alert(`You entered ${askForName}`)
//         nameArr.push(askForName)
//     }
//     while (confirm(`Would you like to enter another name?`))
//     return nameArr;
// }
//
// enterNames();
//
// // Friday Feb 18 Warmup
// // Warmup: Create a function which returns true if the given argument is a number, false if it is not a number
// // Wrong answer
// let isNumber = (num) => {
//     if (!isNaN(num)) {
//         return true;
//     }
//     return false;
// };
//
// // console.log(isNumber("8")) // returns true
// console.log(isNumber([8])); // does js access the array?
// console.log(typeof [8]);
//
// // console.log(isNumber(true)) // why is this true no matter what
// // console.log(isNumber({test:"test"}))
// // console.log(isNumber(88))
//
// // correct answer
//
// let isNumberAgain = (num)=>{
//     return !isNaN(parseFloat(num));
// }
// let isNumberAgainAgain = (num)=>{
//     return typeof num === typeof 2;
// }
//
//
//
//
//FEB 28 2022 warmup
let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

let removeAll = (arr1, removeThis)=>{
    let removeArr=[];
    arr1.forEach((elm)=>{
        if(removeThis !== elm){
            removeArr.push(elm)
        }
    });
    return removeArr;

}
console.log(removeAll(bugs, "ant"))