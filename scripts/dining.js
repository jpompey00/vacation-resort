"use strict";

//text boxes
const confirmationNumberTextBox = document.getElementById("confirmationNumberTextBox");

//radio buttons
const payAsYouGoRadioButton = document.getElementById("payAsYouGoRadioButton");
const allInclusiveRadioButton = document.getElementById("allInclusiveRadioButton");

//buttons
const confirmationNumberSubmitButton = document.getElementById("confirmationNumberSubmitButton");

//content divs
const payAsYouGoDiv = document.getElementById("payAsYouGoDiv");
const allInclusiveDiv = document.getElementById("allInclusiveDiv");

//output
const outputMessage = document.getElementById("outputMessage");

window.onload = function (){
    //make these invisible at the start
   payAsYouGoRadioButton.onchange = onDiningOptionRadioButtonChanged;
   allInclusiveRadioButton.onchange = onDiningOptionRadioButtonChanged;
}



function onDiningOptionRadioButtonChanged(){
if(allInclusiveRadioButton.checked){
    allInclusiveDiv.style.display = "block";
    payAsYouGoDiv.style.display = "none";
} else {
    allInclusiveDiv.style.display = "none";
    payAsYouGoDiv.style.display = "block";
}
}

function calculateAllInclusiveCost(){
    
}