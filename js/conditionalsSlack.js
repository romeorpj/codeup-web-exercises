// Create a function called getToDestination which will help determine how a person can get to their destination!
//     It will accept 4 arguments and the parameter names are:
//     age - the age of the rider
// isInsured - a boolean telling the function if the rider has insurance
// hasCar - a boolean describing if the rider has a car
// canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)


let getToDestination = (age, isInsured, hasCar)=>{
    if(age > 16 && isInsured && hasCar){
        console.log("you can use your own vehicle")
    }else if((age <=16 && !isInsured) || (!hasCar && canGetRideShare())){
        console.log("you have to use rideshare")
    }else{
        console.log("You have to get a ride from a friend")
    }

}
getToDestination(15,false, true, )
// If the rider is over 16, has insurance, and has a car then they can use their own vehicle
// If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service


// If the rider meets none of the above, they should call a friend for a ride!
//     This getToDestination should not return any value, but rather console log based on the conditions met.
//     getToDestination, part 2

driverMilesAway = 10;
uberCost = 20;
myMoney = 21
let canGetRideShare = ()=>{
    if(driverMilesAway <= 10 && myMoney >= uberCost){
        return true;
    }else{
        return false;
    }
}
// Create a function called canGetRideshare() which will RETURN a boolean
// It will determine if there are drivers nearby and the person has enough money for the ride
// Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
// Call canGetRideshare() in the else if after !isLegalDriver &&...
// Be sure to log to the user if they can or cannot get a rideshare