"use strict";


//text boxes
const confirmationNumberTextBox = document.getElementById("confirmationNumberTextBox");

//radio buttons
const payAsYouGoRadioButton = document.getElementById("payAsYouGoRadioButton");
const allInclusiveRadioButton = document.getElementById("allInclusiveRadioButton");
const basicRadioButton = document.getElementById("basicRadioButton");
const premiumRadioButton = document.getElementById("premiumRadioButton");

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
   confirmationNumberSubmitButton.onclick = onConfirmationNumberSubmitButtonClicked;

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

function onConfirmationNumberSubmitButtonClicked(){
    let total;
    let planChoice;
    if(basicRadioButton.checked){
        planChoice = "basic";
        total = calculateAllInclusiveCost(confirmationNumberTextBox.value,0);
    } else {
        planChoice = "premium";
        total = calculateAllInclusiveCost(confirmationNumberTextBox.value, 1);
    }
    outputMessage.innerHTML = `The all-inclusive ${planChoice} option has been added to your reservation.
    The price of your stay has increased by $${total.toFixed(2)} based on your selections here.`
}




function calculateAllInclusiveCost(confirmationNumber, plan){
//from the second hyphen is the number of days : number of adults : number of kids
let confirmationSplit;

let numOfDays;
let adultAmount;
let childrenAmount;

let total;

const ADULT_COST_BASIC = 62.50;
const ADULT_COST_PREMIUM = 80.00;
const CHILD_COST_BASIC = 49.99;
const CHILD_COST_PREMIUM = 49.99;


confirmationSplit = confirmationNumber.split("-");
confirmationSplit = (confirmationSplit[2]).split(":");
numOfDays = confirmationSplit[0];
adultAmount = confirmationSplit[1];
childrenAmount = confirmationSplit[2];



if(plan == 0){
    total = ((adultAmount * ADULT_COST_BASIC) + (childrenAmount * CHILD_COST_BASIC)) * numOfDays;
} else {
    total = ((adultAmount * ADULT_COST_PREMIUM) + (childrenAmount * CHILD_COST_PREMIUM)) * numOfDays;
}

return total;
}