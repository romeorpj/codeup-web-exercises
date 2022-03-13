"use strict";
//*Creating canvas element with vanilla js
// let newCanvas = document.createElement("canvas");
// newCanvas.setAttribute("id","canvas1")
// let body = document.querySelector("body")
// body.appendChild(newCanvas)

$(document).ready(function () {
    // *CREATE CANVAS WITH JQUERY
    let mainCanvas = $("<canvas id='canvas1'></canvas>");
    // $("body").append(mainCanvas)
    let body1 = $("body");
//why does innerHTML not work with jquery and canvas?

// console.log(`${mainCanvas[0]}`)
//     body1.append( ` <div id="container">
// <p>Game Speed: <span id="showGameSpeed"></span></p>
// <input type="range" min="0" max="20" value="5" class="slider" id="slider">
// </div>
// `);

//Create and add individual elements so that canvas would work and be connected inside the container
    let container = $('<div id="container"></div>');
    body1.append(container);
    let speedText = $('<p>Game Speed: <span id="showGameSpeed"></span></p>');
    container.append(speedText);
    let slider = $('<input type="range" min="0" max="20" value="5" class="slider" id="slider">');
    container.append(slider);
    container.prepend(mainCanvas);

//CHARACTER AND ENEMIES
    let character = $('<div id="character"></div>');
    mainCanvas.append(character);
    let enemy = $('<div id="enemy"></div>');
    container.append(enemy);
    console.log(character, enemy)

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

    //*manually adjust scroll speed
    //this will be the default speed btw
    let gameSpeed =5;
    //updates slider value and position
    slider.val(gameSpeed)
    //set gamespeed span to show gameSpeed value
    let showGameSpeed = $("#showGameSpeed");
    showGameSpeed.html(gameSpeed);
    //clickevent when slider change, update speed and span
    $( ".slider" ).change(function(e) {
        //e.target.value returns number at a given slider position
       gameSpeed = e.target.value;
        //this line updates the span with the current speed
        showGameSpeed.html(e.target.value);
    });



    //*GET SCROLLING IMAGES
    //new Image() creates an html image element
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



    //*CREATE NEW IMAGES OBJECTS FOR EASIER HANDLING
    //the modifier allows me to change scroll speed of each image for parallax effect, while still be in sync with
    // the global game speed, so i can change speed of all images if i do a speed burst for example.
    class Layer {
        constructor(image, speedModifier) {
            //set all images x (top left corner)to 0
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            // start second image where first image ends
            this.x2 = this.width;
            this.image = image;
            this.speedModifier = speedModifier;
            //Allows me to pass different speedmodifier value for each image, but will still be tied to global game
            // speed
            this.speed = gameSpeed * this.speedModifier;
        }
    //    METHODS
    //     in charge of moving images horizontally and resetting each image.
        update(){
            this.speed = gameSpeed * this.speedModifier;
            if(this.x <= -this.width){
                this.x = this.width + this.x2 - this.speed;
            }
            if(this.x2 <= -this.width){
                this.x2 = this.width + this.x - this.speed;
            }
            this.x = Math.floor(this.x - this.speed);
            this.x2 = Math.floor(this.x2 - this.speed);
        }
        //everytime update runs, draw will redraw items on the screen
        draw(){
            //    drawImage = image top left x and y and the width and height
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
        }
    }
//*CREATE NEW LAYER OBJECTS
//*NOTE speedmodifier is half. so if gamespeed is 10px, this layer will be moving at 5px per frame
    const layer1 = new Layer(backgroundLayer1, 0.2)
    const layer2 = new Layer(backgroundLayer2, 0.43)
    const layer3 = new Layer(backgroundLayer3, 0.6)
    const layer4 = new Layer(backgroundLayer4, 0.83)
    const layer5 = new Layer(backgroundLayer5, 1.1)

    //CREATE ARRAY OF NEW LAYER OBJECTS
    //gameObjects
    let gameLayers = [layer1, layer2,layer3,layer4,layer5];



    //*CREATE RECURSIVE FUNCTION TO HANDLE RAF
    //RAF Article https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        // loop through array of layer objects and call the update and draw methods on each one to output scrolling
        // images on screen
        ctx.drawImage(character, 0, 0);
        gameLayers.forEach(object =>{
            object.update();
            object.draw();
        })
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




//*non dry way of setting scroll speed
//x axis controlled inside animate function moves images left right; y moves images up down
//x2 starts at 2400, which is at the end(to the right) of x
//     let x = 0;
// let x2 = 2400;



//*CREATE FUNCTION TO ANIMATE AND CONTROL IMAGES
//RAF Article https://www.kirupa.com/html5/animating_with_requestAnimationFrame.htm
// function animate() {
//     //ClearRect is needed to erase the whole canvas, otherwise screen will just retain previous frames on screen(Smudging)
//     ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
//     //drawImage - image, x and y coordinate to place top left corner of image.
//     //drew a second image to give it an infinite scroll feel
//     ctx.drawImage(backgroundLayer1, x, 0);
//     ctx.drawImage(backgroundLayer1, x2 , 0);
//     //if the top left corner of x reach less than -2400, reset the image to positive 2400 (2400 is the width of
//     // the images)
//     //have to minus gamespeed because images are updating at different times and the image width (2400) is
//     // isnt divisible by gamespeed variable so it creates a gap, that can grow larger or overlap overtime
//     //so minus gamespeed to offset each image while the other one was resetting, to shorten the gap
//     //gap is still there when gamespeed isnt divisible by width
//     //** gap is completely gone when i offset each image by the difference in width of the other image.
//     //This is the long winded and repetitious method, the better way is to probably use classes/constructor
//     if(x < -2400) x = 2400 + x2 - gameSpeed;
//     else x -= gameSpeed;
//     if(x2 < -2400) x2 = 2400 + x - gameSpeed;
//     else x2 -= gameSpeed;
//     //essentially RAF is calling animate 60 times per sec.
//     //x-= gameSpeed ...subtracts gamespeed from x and assigns that value to x, the more you subtract - the
//     // faster the image will move negatively to the left
//     // x -= gameSpeed;
//     requestAnimationFrame(animate);
// }
// animate();