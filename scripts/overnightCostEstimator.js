"use strict";
//textbox elements
const nameTextBox = document.getElementById("nameTextBox");
const emailTextBox = document.getElementById("emailTextBox");
//date textbox
const checkInDateBox = document.getElementById("checkInDateBox");
//number textbox elements
const numberOfDaysNumberBox = document.getElementById("numberOfDaysNumberBox");
const numberOfAdultsNumberBox = document.getElementById("numberOfAdultsNumberBox");
const numberOfChildrenNumberBox = document.getElementById("numberOfChildrenNumberBox");

//radio buttons
const queenRadioButton = document.getElementById("queenRadioButton");
const kingRadioButton = document.getElementById("kingRadioButton");
const TwoBedroomRadioButton = document.getElementById("TwoBedroomRadioButton");
const noneDiscountRadioButton = document.getElementById("noneDiscountRadioButton");
const seniorDiscountRadioButton = document.getElementById("seniorDiscountRadioButton");
const militaryDiscountRadioButton = document.getElementById("militaryDiscountRadioButton");

//submit button
const submitButton = document.getElementById("submitButton");

//output elements
const originalRoomCostOutput = document.getElementById("originalRoomCostOutput");
const discountOutput = document.getElementById("discountOutput");
const discountedRoomCostOutput = document.getElementById("discountedRoomCostOutput");
const taxOutput = document.getElementById("taxOutput");
const totalStayCostOutput = document.getElementById("totalStayCostOutput");
const confirmationNumberOutput = document.getElementById("confirmationNumberOutput");

window.onload = function (){
    submitButton.onclick = onSubmitButtonClicked;
}

function onSubmitButtonClicked(){

    //handle max occupancy
    let numberOfDays = Number(numberOfDaysNumberBox.value);
    let discount = 0;
    
    //The replace is to get the off by one error to stop happening
    let checkInDate = new Date(checkInDateBox.value.replace(/-/g,"/"));


    let checkInMonth = checkInDate.getMonth()+1; 

    let roomRate;
    let roomCost;
    let discountedRoomCost;
    let totalStayCost;
    let tax;

    //Constant
    const TAX_RATE = .12;

    //gets the room rate
    if(queenRadioButton.checked){
        roomRate = getRoomRate(checkInMonth,"Queen");
    }
    if(kingRadioButton.checked){
        roomRate = getRoomRate(checkInMonth,"King");
    }
    if(TwoBedroomRadioButton.checked){
        roomRate = getRoomRate(checkInMonth,"TwoBedroom");
    }

    //calculates the discount
    if(seniorDiscountRadioButton.checked){
        discount =  .1;
    }
    if(militaryDiscountRadioButton.checked){
        discount =  .2;
    }


    roomCost = roomRate * numberOfDays;
    discountedRoomCost = roomCost - (roomCost * discount);
    tax = (discountedRoomCost * TAX_RATE);
    totalStayCost = discountedRoomCost + (tax);

    originalRoomCostOutput.innerHTML = `$${roomCost}`;
    discountOutput.innerHTML = `${discount * 100}%`;
    discountedRoomCostOutput.innerHTML = `$${discountedRoomCost}`;
    taxOutput.innerHTML = `$${tax.toFixed(2)}`;
    totalStayCostOutput.innerHTML = `$${totalStayCost.toFixed(2)}`;
    //this is so ugly
    confirmationNumberOutput.innerHTML = `${nameTextBox.value.substring(0,3).toUpperCase()}-${checkInDate.getMonth()}${checkInDate.getFullYear()}-${numberOfDays}:${numberOfAdultsNumberBox.value}:${numberOfChildrenNumberBox.value}`;
}

function getRoomRate(checkInMonth, roomType){
    //Checkin Date check

    if(roomType == "Queen" || roomType == "King"){
        if(checkInMonth >=6 && checkInMonth <=8){
            return 250;
        } else {
            return 150;
        }
    } else if(roomType == "TwoBedroom"){
        if(checkInMonth >=6 && checkInMonth <=8){
            return 350;
        } else {
            return 210;
        }
    }
}

