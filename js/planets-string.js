(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray= planetsString.split("|");
    console.log(planetsArray);
    //using split to convert string into a comma separated array of strings and removing the pipe
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // planetsArray.join("<br>")
// let planetsJoin =planetsArray.join("<br>");
let planetsJoin = planetsArray.map(x => `<li>${x}</li>`)
    console.log(planetsJoin.join(" ").split().map(y=>`<ul>${y}</ul>`).join())
//    planetsJoin maps each planet to a new array with each planet being wrapped in an li
//    then we join the strings, to remove the comma and to turn the array into one long string
//    then we split it again with no parameter, this copies the entire string plus li's into a new array as a whole.
//    then we map the array to a new array thats wrapped in a ul tag.
//    lastly we join it to convert it from an array to a string
})();