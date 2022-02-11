// prompt user to input any odd number between 1 and 50

let numPrompt = parseInt(prompt(`Please enter any odd number between and including 1 and 50`))

while (numPrompt % 2 === 0 || numPrompt === null) {
    numPrompt = parseInt(prompt(`Please enter any odd number between and including 1 and 50`))
}

if (numPrompt % 2 !== 0) {
    console.log(`Number to skip is: ${numPrompt}`)
    for (let i = 1; i < 50; i++) {
        if (numPrompt === i){
            console.log(`Yikes! Skipping number: ${i}`)
            continue;
        }

        if (i % 2 !== 0) {
            console.log(`Here is an odd number: ${i}`)

        }
    }
}




