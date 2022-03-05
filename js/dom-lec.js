
// get the thing
let navContent = document.getElementById("navContent");

// log the thing to make sure you got the thing
// console.log(navContent);

console.log(navContent.children);

// create an element
let nameElement = document.createElement("p");

// get the data and set it to the text of the new element
nameElement.innerText = getGitHubInfo().name;
nameElement.style["color"] = 'white';
console.log(nameElement)

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar
let ul = document.querySelector(".top-ul");
let newLi = document.createElement("li");
newLi.classList.add("col-3","pr-1");
newLi.appendChild(nameElement);
ul.prepend(newLi);

// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
function getGitHubInfo(){
    return {
        name: "vegetasrevenge"
    };
}