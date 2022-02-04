// /* TODO: MINI-EXERCISE:
// *   -> Write a function named getName() which will return the result of the user inputting their name(s)
// *   -> Console log the invocation of getName() to ensure it works properly
// *   -> Now, write a function named showName(username).
// *       -> It takes in 'username' as an argument and alerts the user to their name
// *       -> Pass an invocation of getName() as an argument to the invocation of showName()
// *       -> showName() should be void function. That is, it should not return a value - only execute code
// *   -> Test to ensure your code is working as expected
// * */
//
// let yourName = prompt(`what is your name?`)
//
// let getName=(name)=>{
//     return name.toUpperCase();
// }
//
// let showName=(username)=>{
//     alert(username(yourName));
// }
//
// showName(getName);
//


// Make a function named isLowerCase(letter) which returns true if the parameter is lowercased

let isLowerCase=(letter)=>{
    let lower =letter === letter.toLowerCase()? true:false;
    console.log(lower);
}
isLowerCase("tth");
    // let letSplit = letter.split("");
    // let count = 0;
    // letSplit.forEach((elm)=>{
    //     if(elm === elm.toUpperCase()){
    //         count++;
    //         console.log(count);
    //         if (count > 0){
    //             console.log("Nope, not a lowercase letter")
    //         }else{
    //             console.log(`yes, your word is all lowercase`)
    //         }
    //     }
    // })

// ***** Write a function named double(n) that returns a number times two

// let double=(n)=>{
//     return n*2;
// }
// double(6)
// ***** Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and data type.

// let areIdentical = (input1, input2)=>{
//    let check=  input1 === input2? true:false;
//    return check;
// }
// console.log(areIdentical(2,2));