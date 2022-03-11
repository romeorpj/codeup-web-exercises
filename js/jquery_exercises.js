"use strict";

$(document).ready(function () {
    // let titleContent = $('#title').html();
    // alert( titleContent );
    // let listOfCharacters = $('#list-of-characters').html();
    // alert( listOfCharacters );

    // add codeup class
    $( 'li' ).addClass( "codeup" ).css("border", '1px solid red' );

    // remove codeup class
   console.log($( '#list-of-characters + li' ).removeClass("codeup"))
// give a random element the class of codeup
    $( 'p' ).addClass( "codeup" );
});


