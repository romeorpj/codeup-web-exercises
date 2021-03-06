(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
let person = {
    firstName:"Richard",
        lastName: "Jackson"
    }
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function sayHello() {
        console.log(`Hello from ${this.firstName} ${this.lastName}`)
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    //if buy more than 200 - 12% discount
    //log how much ryan, cameron, george need to pay
    //display NAME, AMOUNT BEFORE DISCOUNT, THE ACTUAL DISCOUNT(if any),AMOUNT AFTER DISCOUNT

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    let CalculateShopperDiscounts = ()=>{
        let discountAmount = 12;
        let discountedPrice;
        // loop through shoppers with foreach
        shoppers.forEach((person)=>{
            if(person.amount > 200){
                discountedPrice =   person.amount - (person.amount *0.12);
                console.log(`Hello ${person.name}, Your pre-discount price was $${person.amount}. But with the ${discountAmount}%, your new price is now only $${discountedPrice}`)
            }
            else{
                console.log(`Sorry ${person.name}, you do not qualify for the discount. You have to pay the full price of $${person.amount}`)
            }
        })
    }

CalculateShopperDiscounts();
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {title: "book1", author: {fName: "Random", lName: "Dude"}},
        {title: "book2", author: {fName: "Some", lName: "Dude"}},
        {title: "book3", author: {fName: "Thee", lName: "Dude"}},
        {title: "book4", author: {fName: "Crazy", lName: "Dude"}},
        {title: "book5", author: {fName: "Loco", lName: "Dude"}}
    ];
console.log(books[0].title) // "The Salmon of Doubt"
console.log(books[0].author.fName) // "Douglas"
console.log(books[0].author.lName) // "Adams"

function bookOutput(){
    books.forEach((i,index)=>{
        console.log(i)
        console.log(`Book#: ${index + 1}`);
        console.log(`Title: ${i.title}`);
        console.log(`Author: ${i.author.fName} ${i.author.lName} \n`)
});

}
bookOutput();
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    function createBook() {
        let books2Obj = {};
        let books2Arr = [];
        let enterBookTitlePrompt;
        let enterAuthorNamePrompt;
        //Loop until user enters ANYTHING other than an empty string
        do {
            enterBookTitlePrompt = prompt(`Enter your book title`);
            enterAuthorNamePrompt = prompt(`Enter author first and last name`)
        }
        while ((enterBookTitlePrompt === null || enterBookTitlePrompt === "") || (enterAuthorNamePrompt === null || enterAuthorNamePrompt === ""))
        books2Obj.title = enterBookTitlePrompt;
        books2Obj.author = enterAuthorNamePrompt;
        showBookInfo(books2Obj, books2Arr)
    }

    createBook();

//set to localstorage to store arrays
    function showBookInfo(books2ObjParam, books2ArrParam) {
        books2ArrParam.push(books2ObjParam)
        console.log(books2ArrParam)
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



})();
