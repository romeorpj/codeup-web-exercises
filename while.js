// ***while loop question
// let num = 2;
// while(num <= 65536){
// console.log(num)
//     num *=2
// }



// ***do while loop question
//if 0 cones -- Yay! I sold them all!
//if conesBeingPurchased is greater than amount of cones -- Cannot sell you 6 cones I only have 3...
// if there are enough cones -- x cones sold!


// let conesBeingPurchased = Math.floor(Math.random() * 5) + 1;
//
// do{
//     let amountOfConesAvailable = Math.floor(Math.random() * 50) + 50;
//     if(amountOfConesAvailable === 0){
//         console.log("Yay! I sold them all!")
//         amountOfConesAvailable - amountOfConesAvailable;
//     }else if(conesBeingPurchased > amountOfConesAvailable){
//         console.log(`I cannot sell you ${conesBeingPurchased} cones I only have ${amountOfConesAvailable}`)
//         break;
//     }else{
//         console.log(`${conesBeingPurchased} cones sold! from my stash of ${amountOfConesAvailable}`)
//         break;
//     }
// }while(amountOfCones !== 0);


let amountOfConesAvailable = Math.floor(Math.random() * 50) + 50;
do{
    let conesBeingPurchased = Math.floor(Math.random() * 5) + 1;
        if(conesBeingPurchased < amountOfConesAvailable){
            console.log(`${conesBeingPurchased} cones sold! from my stash of ${amountOfConesAvailable}`)
            amountOfConesAvailable = amountOfConesAvailable - conesBeingPurchased;

        }else if(conesBeingPurchased > amountOfConesAvailable){
            console.log(`I cannot sell you ${conesBeingPurchased} cones I only have ${amountOfConesAvailable}`)
            break;

        }else if(conesBeingPurchased === amountOfConesAvailable){
            console.log("Yay! I sold them all! You singlehandedly bought EVERY CONE")
            amountOfConesAvailable =amountOfConesAvailable - amountOfConesAvailable;

        }else{
            console.log("Yay! I sold them all! I have no more cones")
            amountOfConesAvailable = amountOfConesAvailable - amountOfConesAvailable;
        }
}while(amountOfConesAvailable);