"use strict";

$(document).ready(function () {
    // let titleContent = $('#title').html();
    // alert( titleContent );
    // let listOfCharacters = $('#list-of-characters').html();
    // alert( listOfCharacters );

    // add codeup class
   // let lis =  $( 'li' ).addClass( "codeup" ).css("border", '1px solid red' );

// TODO: remove class
    // remove codeup class
   // $( 'li' )[1].removeClass("codeup")
// give a random element the class of codeup
//     $( 'p' ).addClass( "codeup" );
//
//    $("li").css("font-size", "20px")
//     $("h1,p,li").css("background","yellow")


    // *****MOUSE EVENTS

    // Add jQuery code that will change the background color of an h1 element when clicked.
    $("h1").click(function () {
        $(this).css("background","darkseagreen")
    })
    // Make all paragraphs have a font size of 18px when they are double clicked.
    $("p").dblclick(function () {
        $(this).css("font-size","18px")
    })
    // Set all li text color to red when the mouse is hovering; reset to black when it is not.
    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
});


