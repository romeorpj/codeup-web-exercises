"use strict";

// BASIC FUNCTIONS

// returns the result of adding num1 and num2 together
// function add(num1, num2, num3){ // <- parameters here
//     return num1 + num2 + num3;
// }
//
// console.log("The result of add() is: " + add(10, 10, 10)); // <- arguments here
//
// var myNum = 12;
// var myNum2 = 21;
//
// console.log("The result of add() is: " + add(myNum, myNum, myNum2));
//
// // Returns the difference of subtracting num2 from num1
// function subtract(num1, num2){
//     return num1 - num2;
// }
//
// console.log("The result of subtract() is: " + subtract(10, 2));
//
// // MINI EXERCISE
// // TODO: Create functions which will return the product (*) of two numbers and the dividend (/) of two numbers, respectively
//
// function multiply(num1, num2){
//     return num1 * num2;
// }
//
// function divide(num1, num2){
//     return num1 / num2;
// }
//
// function addWithDefaults(num1, num2 = 0){
//     return num1 + num2;
// }
//
// console.log(addWithDefaults(2, 2));
//
// // LOCAL, FUNCTION, AND GLOBAL SCOPING
//
// {
//     {
//         let number = 2;
//         {
//             console.log(number);
//         }
//     }
// }
//
// var number2 = 10;
//
// function scopingFun(){
//     var number = 2;
//
//     console.log(number + number2);
// }
//
// scopingFun();

// TODO: Write a function to 'determine' if a driver is available to accept the ride
//  -> You can have the user give their location and mock up the location of the driver
//  -> ie: the driver is in Dallas, so they must give you either ['Dallas', 'Irving', 'Plano', 'Duncanville', or 'Richardson']



//***Array Destructuring of cities drivers will travel too.
let acceptableUserCities = ['Dallas', 'Irving', 'Plano', 'Duncanville', 'Richardson'];
let [Dallas, Irving, Plano, Duncanville, Richardson] = acceptableUserCities;

//***Function to see if user is in a city that the drivers are located in
let isDriverAvailable= (driverAvailability)=>{
    // *** Current user location
    let userLocation = prompt("What city are you in");
    //***is driver available to accept a new user
    let isDriverFree = driverAvailability;
if(userLocation === (Dallas || Irving || Plano || Duncanville || Richardson) && isDriverFree){
    console.log("Driver is available")
}
}
isDriverAvailable(true)


// TODO: Write a function to 'determine' the cost of the rideshare and pass that function's return value as an argument to the invocation of tryGetRideshare

// TODO: Write a function to orchestrate this program
//  -> This means you have one function which sets the execution order
//      -> 1) get the starting point and destination
//      -> 2) get the cost of the ride
//      -> 3) determine if the rider(s) has enough money
//      -> 4) hail the rideshare

tryGetRideshare(20, true, getFundsAvailable());

function getFundsAvailable(){
    let moneyInAccount = parseFloat(prompt("How much is in the account"));
    let creditsInAccount = parseFloat(prompt("How much is in the account"));

    return  moneyInAccount + creditsInAccount;
}

function tryGetRideshare(costOfRide, driverAvailable, totalFundsAvailable){

    // TODO: This is some starter code for splitting the rideshare cost
//     let numOfRiders;
//
//     if(confirm("Are you splitting this ride with someone else?")){
//         numOfRiders = prompt("How many additional riders do you have?");
//     }
//     if (numOfRiders){
//      // split the cost and 'message' (fake it up) the other riders
//     }

    if (driverAvailable && totalFundsAvailable >= costOfRide){
        console.log("Your ride is on the way");
    }else{
        console.log("No drivers are available at this time...");
    }
}















