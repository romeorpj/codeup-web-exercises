"use strict";
//*Creating canvas element with vanilla js
// let newCanvas = document.createElement("canvas");
// newCanvas.setAttribute("id","canvas1")
// let body = document.querySelector("body")
// body.appendChild(newCanvas)

$(document).ready(function () {
    // *CREATE CANVAS WITH JQUERY
    let mainCanvas = $("<canvas id='canvas1'>");
    $("body").append(mainCanvas)


    // SETUP 2D CANVAS
//    *START Creating context with vanilla javascript
// const ctx = newCanvas.getContext("2d");
    // const CANVAS_WIDTH = newCanvas.width = 800;
    //   const CANVAS_HEIGHT = newCanvas.height = 700;
    //  *END*******************

    // SETUP 2D CANVAS
    //    *Creating context with Jquery
    //jquery appears to always return a nodelist **Ask about this**
    const ctx = mainCanvas[0].getContext("2d")
    const CANVAS_WIDTH = mainCanvas[0].width = 800;
    const CANVAS_HEIGHT = mainCanvas[0].height = 700;
    console.log(mainCanvas[0]);


    //*GET SCROLLING IMAGES
    let backgroundLayer1 = new Image();
    backgroundLayer1.src = "/img/konami_code/konami_images/test/layer-1.png";
    let backgroundLayer2 = new Image();
    backgroundLayer2.src = "/img/konami_code/konami_images/test/layer-2.png";
    let backgroundLayer3 = new Image();
    backgroundLayer3.src = "/img/konami_code/konami_images/test/layer-3.png";
    let backgroundLayer4 = new Image();
    backgroundLayer4.src = "/img/konami_code/konami_images/test/layer-4.png";
    let backgroundLayer5 = new Image();
    backgroundLayer5.src = "/img/konami_code/konami_images/test/layer-5.png";

    //*manually adjust scroll speed
    let gameSpeed =15;
    //x axis controlled inside animate function moves images left right; y moves images up down
    //x2 starts at 2400, which is at the end(to the right) of x
    let x = 0;
let x2 = 2400;
    //*CREATE FUNCTION TO ANIMATE AND CONTROL IMAGES
    //RAF Article https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm
    function animate() {
        //ClearRect is needed to erase the whole canvas, otherwise screen will just retain previous frames on screen(Smudging)
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        //drawImage - image, x and y coordinate to place top left corner of image.
        //drew a second image to give it an infinite scroll feel
        ctx.drawImage(backgroundLayer4, x, 0);
        ctx.drawImage(backgroundLayer4, x2 , 0);
        //if the top left corner of x reach less than -2400, reset the image to positive 2400 (2400 is the width of
        // the images)
        //have to minus gamespeed because images are updating at different times and the image width (2400) is
        // isnt divisible by gamespeed variable so it creates a gap, that can grow larger or overlap overtime
        //so minus gamespeed to offset each image while the other one was resetting, to shorten the gap
        //gap is still there when gamespeed isnt divisible by width
        //** gap is completely gone when i offset each image by the difference in width of the other image.
        if(x < -2400) x = 2400 + x2 - gameSpeed;
        else x -= gameSpeed;
        if(x2 < -2400) x2 = 2400 + x - gameSpeed;
        else x2 -= gameSpeed;
        //essentially RAF is calling animate 60 times per sec.
        //x-= gameSpeed ...subtracts gamespeed from x and assigns that value to x, the more you subtract - the
        // faster the image will move negatively to the left
        // x -= gameSpeed;
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