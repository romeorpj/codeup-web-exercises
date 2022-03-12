"use strict";

$(document).ready(function () {
    $("body").append($("<canvas id='canvas1'></canvas>"));
    // let mainCanvas = $("<canvas id='canvas1'></canvas>");
    // let body = $("body").append(mainCanvas)
    // KONAMI PASSWORD
    let myKonami = [38, 38,40,40,37,39,37,39,66,65,13];
    let konamiPosition = 0;

    // SETUP 2D CANVAS
    const canvas = $("#canvas1");
    console.log(canvas[0])
const ctx = canvas[0].getContext("2d")
  const CANVAS_WIDTH = canvas.width = 800;
    const CANVAS_HEIGHT = canvas.height = 700;

    //*manually adjust scroll speed
    let gameSpeed = 5;

    //*SET SCROLLING IMAGES
    const backgroundLayer1 = new Image();
    backgroundLayer1.src =

    $(document).keyup(function (e) {
        console.log(e.keyCode);
        let expectedKey = myKonami[konamiPosition];
        let keyPressed = e.keyCode;

        if (expectedKey === keyPressed) {
            konamiPosition++;

            if (konamiPosition === myKonami.length) {
// call game function here
                konamiPosition = 0;
            }
        } else {
            konamiPosition = 0;
        }
    });
})