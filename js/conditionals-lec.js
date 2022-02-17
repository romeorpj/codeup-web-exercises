"use strict";

// if(some condition) {
//     executes if some condition is true
// }

var isAdmin = false;

if (isAdmin) {
    console.log("You're an admin")
}

var itemPrice = 4.99;
var moneyInMyWallet = 5.00;

if (moneyInMyWallet >= itemPrice) {
    console.log("You can buy this item");
} else {
    console.log("You can't buy this ya poor")
}

var age = 21;
var priceOfDrink = 8.00;

if (age >= 21 && moneyInMyWallet >= priceOfDrink) {
    console.log("You can buy a drink")
} else {
    console.log("Nope")
}


// IF / ELSE IF / ELSE
// Create a function called getToDestination which will help determine how a person can get to their destination!
//     It will accept 4 arguments and the parameter names are:
//
//     age - the age of the rider
// isInsured - a boolean telling the function if the rider has insurance
// hasCar - a boolean describing if the rider has a car
// canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
// If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
// If the rider meets none of the above, they should call a friend for a ride!
//     This getToDestination should not return any value, but rather console log based on the conditions met.
//
//     getToDestination, part 2
// Create a function called canGetRideshare() which will RETURN a boolean
// It will determine if there are drivers nearby and the person has enough money for the ride
// Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// Call canGetRideshare() in the else if after !isLegalDriver &&...
// Be sure to log to the user if they can or cannot get a rideshare


function getToDestination(age, isInsured, hasCar) {
    if (age > 16 && isInsured && hasCar) {
        console.log("You can use your own vehicle");
    } else if (canGetRideshare(true, false)) {
        console.log("You can get a rideshare!");
    } else {
        console.log("You gotta call a friend");
    }
}

function canGetRideshare(hasDriversNearby, hasEnoughMoney) {
    if (hasDriversNearby && hasEnoughMoney) {
        return true;
    } else {
        return false;
    }
    // alternative
    // return !!(hasDriversNearby && hasEnoughMoney);
}

getToDestination(16, false, false);



function checkWeather(todaysWeather) {
    // if (todaysWeather === "snowing") {
    //     console.log("please stay inside")
    // } else if (todaysWeather === "raining") {
    //     console.log("grab an umbrella")
    // } else if (todaysWeather === "hailing") {
    //     console.log("cover your car")
    // } else {
    //     console.log("go play in the sun :)")
    // }
    todaysWeather = todaysWeather.toLowerCase();
    switch (todaysWeather) {
        case "snowing":
            console.log("please stay inside");
            break;
        case "raining":
            console.log("grab an umbrella");
            break;
        case "hailing":
            console.log("cover your car");
            break;
        default:
            console.log("go play in the sun :)");
            break;
    }

}

checkWeather("SNOWING");











