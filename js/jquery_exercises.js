"use strict";

$(document).ready(function () {
    // let titleContent = $('#title').html();
    // alert( titleContent );
    // let listOfCharacters = $('#list-of-characters').html();
    // alert( listOfCharacters );

    // add codeup class
   let lis =  $( 'li' ).addClass( "codeup" ).css("border", '1px solid red' );

// TODO: remove class
    // remove codeup class
   // $( 'li' )[1].removeClass("codeup")
// give a random element the class of codeup
    $( 'p' ).addClass( "codeup" );

   $("li").css("font-size", "20px")
    $("h1,p,li").css("background","yellow")
});


