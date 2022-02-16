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




// Defines a contact info object
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}
// Defines a person object
function Person(names, occupation, dob, contactInfo) {
    this.names = names;
    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}
// makes a new person object instance (by invoking the constructor)
let person2 = new Person(
    ["Richard", "Jackson"],
    "11/09/1985",
    "Software Developer",
    new ContactInfo(
        "333-333-7777",
        "1114 some street",
        "San Antonio",
        "TX",
        "77232",
        "myemail@gmail.com"));

console.log(person2.contactInfo.emailAddress);

