"use strict";

//output
const outputTable = document.getElementById("outputTable");
//select dropdown
const activitySelectElement = document.getElementById("activitySelectElement");

//div elements
const artsAndCraftsTableRows = document.getElementById("artsAndCraftsTableRows");
const adventureTableRows = document.getElementById("adventureTableRows");
const museumsAndCultureTableRows = document.getElementById("museumsAndCultureTableRows");
const tableHeaders = document.getElementById("tableHeaders");

window.onload = function () {
    activitySelectElement.onchange = onActivitySelectElementChanged;
};

function onActivitySelectElementChanged() {
    if (activitySelectElement.value == 0) {
        tableHeaders.style.display = "table-row-group";
        artsAndCraftsTableRows.style.display = "table-row-group";
        adventureTableRows.style.display = "none";
        museumsAndCultureTableRows.style.display = "none";

    } else if (activitySelectElement.value == 1) {
        tableHeaders.style.display = "table-row-group";
        artsAndCraftsTableRows.style.display = "none";
        adventureTableRows.style.display = "table-row-group";
        museumsAndCultureTableRows.style.display = "none";

    } else if (activitySelectElement.value == 2) {
        tableHeaders.style.display = "table-row-group";
        artsAndCraftsTableRows.style.display = "none";
        adventureTableRows.style.display = "none";
        museumsAndCultureTableRows.style.display = "table-row-group";
    } else {
        tableHeaders.style.display = "none";
        artsAndCraftsTableRows.style.display = "none";
        adventureTableRows.style.display = "none";
        museumsAndCultureTableRows.style.display = "none";

        
    }

};



