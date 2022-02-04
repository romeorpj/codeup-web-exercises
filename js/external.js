"use strict";

// console.log("Hello from external JavaScript");
//
// alert('Welcome to my Website!');
//
// let favColor = prompt("What is your favorite color" );
//
// let userName = prompt("what is your name");
//
// alert(`hello ${userName}, ${favColor} is my favorite color too`);

//*****
// 1. little mermaid $3, 2. brother bear 5 days, 3. Hercules 1 day
//price per movie $3/day



// let mermaid = prompt(`How many days do you want this movie?`) * 3;
// console.log(mermaid);
// console.log(typeof mermaid);
// let bear = prompt(`How many days do you want this movie?`) *3;
// console.log(bear);
// console.log(typeof bear);
// let herc = prompt(`How many days do you want this movie?`) *3;
// console.log(herc);
// console.log(typeof herc);
// let moviePrice = (mermaid + bear + herc);
// console.log(typeof moviePrice);
// alert(moviePrice);
//
// let mermaid = Number(prompt(`How many days do you want this movie?`)) ;
// let bear = Number(prompt(`How many days do you want this movie?`));
// let herc = Number(prompt(`How many days do you want this movie?`)) ;
// let moviePrice = (mermaid + bear + herc) *3;
// alert(moviePrice);

//****

// // google 400, amazon 380 face 350
// // worked 10, 6, 4
//
let googleHours = Number(prompt(`How many hours did you work?`));
  let amazonHours = Number(prompt(`How many hours did you work?`));
    let facebookHours = Number(prompt(`How many hours did you work?`));
let googleMoney = Number(prompt(`How much do you earn per hour?`));
let amazonMoney = Number(prompt(`How much do you earn per hour?`));
let facebookMoney = Number(prompt(`How much do you earn per hour?`));

let hours = (googleHours + amazonHours + facebookHours);
let money = (googleMoney + amazonMoney + facebookMoney);

alert(hours + money);


//*****
//can be enrolled IF class not full AND class does not conflict with current schedule.

// let conflictQuestion = prompt(`does this class conflict with your schedule yes or no?`);
// while (!conflictQuestion === "yes"){
//     // alert(`can not enroll in class`);
//     conflictQuestion;
//     }else{
//         alert("refresh page and try again.")
//     }
// }

// let question = confirm("Tell me you're free?")
// if(!question){
//     alert("you can't join this class")
// }else{
//     alert("come on and join us")
// }


// let buy = Number(prompt(`How many items are you purchasing?`));
// let exp = prompt("has the offer expired - yes or no?")
// exp.toLowerCase();
//
// let premiumMember = true;
// if(!premiumMember & buy  >= 2 && exp === "no"){
//     alert("thanks for the buy, premium and non-premium can buy")
// }else if(premiumMember || exp === "no"){
//     alert("thanks for being a premium member")
// }else{
//     alert("either your offer has expired or you're not a premium member")
// }