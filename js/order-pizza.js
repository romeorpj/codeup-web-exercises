"use strict";
let nextStepBtn = document.querySelector("#first-tab-btn");
let tabPane2 = document.querySelector(".tab-pane2");


//eventlistener to go from pane 1 to ane 2 when the next step button is clicked
if(nextStepBtn){
    console.log("yooooo")
    nextStepBtn.addEventListener("click",()=>{
        tabPane2.classList.add("active","show");
        console.log("heeyyyyy")
    })
}

nextStepBtn.addEventListener("click",()=>{
    tabPane2.classList.add("active","show");
    console.log("heeyyyyy")
})