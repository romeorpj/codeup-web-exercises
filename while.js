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

let amountOfCones = Math.floor(Math.random() * 50) + 50;
let conesBeingPurchased = Math.floor(Math.random() * 5) + 1;

do{
    if(amountOfCones === 0){
        console.log("Yay! I sold them all!")
        amountOfCones - amountOfCones;
    }else if(conesBeingPurchased > amountOfCones){
        console.log(`I cannot sell you ${conesBeingPurchased} cones I only have ${amountOfCones}`)
        break;
    }else{
        console.log(`${conesBeingPurchased} cones sold! from my stash of ${amountOfCones}`)
        break;
    }
}while(amountOfCones !== 0);