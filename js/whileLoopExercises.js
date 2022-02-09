let num = 7;
while(num >= 7 && num < 50){
    num++
    if(num % 2 !== 0){
        console.log(num)
    }
}
// let fullNameEntered = false;
// let names = "";
// // WE DON'T KNOW HOW MANY NAMES THEY HAVE!
// while (!fullNameEntered){

//     names += prompt(`Please enter or add to your name `);

//     fullNameEntered = confirm("Is this your full name?")
//     if(fullNameEntered === false){
//         names += prompt(`Please enter or add to your name `);
//     }else if(fullNameEntered === true){
//       alert("This is your name: " + names)
//     }
// }

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that they are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.

// cars in the parking lot at a time
// up to 30 spaces
// as cars fill in, write a do while that prints available spaces
//if full log "this parking lot is now full"

let parkingSpaces = 30;
let newCars = 2;
do {
    console.log(parkingSpaces);
    parkingSpaces -= newCars;
} while (parkingSpaces > 0);
console.log("this parking lot is now full");

// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.

let password = "newpassword"
let answer = false;
let ask;
while(!answer){


    answer = prompt("Please enter your password.") === password;
}
alert("correct password")