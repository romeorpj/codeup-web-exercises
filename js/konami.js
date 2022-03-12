"use strict";

$(document).ready(function () {
    $("body").append($("<canvas id='canvas1'></canvas>"));
    // let mainCanvas = $("<canvas id='canvas1'></canvas>");
    // let body = $("body").append(mainCanvas)


    // SETUP 2D CANVAS
    const canvas = $("#canvas1");
    console.log(canvas[0])
const ctx = canvas[0].getContext("2d")
  const CANVAS_WIDTH = canvas.width = 800;
    const CANVAS_HEIGHT = canvas.height = 700;

    //*manually adjust scroll speed
    let gameSpeed = 5;

    //*GET SCROLLING IMAGES
    let backgroundLayer1 = new Image();
    backgroundLayer1.src= "/img/konami_code/konami_images/test/layer-1.png";
    let backgroundLayer2 = new Image();
    backgroundLayer2.src= "/img/konami_code/konami_images/test/layer-2.png";
    let backgroundLayer3 = new Image();
    backgroundLayer3.src= "/img/konami_code/konami_images/test/layer-3.png";
    let backgroundLayer4 = new Image();
    backgroundLayer4.src= "/img/konami_code/konami_images/test/layer-4.png";
    let backgroundLayer5 = new Image();
    backgroundLayer5.src= "/img/konami_code/konami_images/test/layer-5.png";
// console.log($(backgroundLayer5).html());



    //*CREATE FUNCTION TO ANIMATE AND CONTROL IMAGES
    //RAF Article https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm
    function animate(){
        ctx.drawImage(backgroundLayer4, 0, 0);
        requestAnimationFrame(animate);
    }
animate();

// KONAMI PASSWORD
    let myKonami = [38, 38,40,40,37,39,37,39,66,65,13];
    let konamiPosition = 0;

    //*REVEAL GAME WITH SUCCESSFUL COMPLETION OF KONAMI CODE
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