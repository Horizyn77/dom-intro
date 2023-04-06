

// get a reference to the textbox where the bill type is to be entered

const billTypeTextElem = document.querySelector(".billTypeText");

//get a reference to the add button

const addToBillBtnElem = document.querySelector(".addToBillBtn");

const callTotalElem = document.querySelector(".callTotalOne");

const smsTotalElem = document.querySelector(".smsTotalOne");

const totalCostElem = document.querySelector(".totalOne");
//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

var callsTotal = 0;
var smsTotal = 0;

function textBillTotal() {

    var billTypeEntered = billTypeTextElem.value.trim();

    if (billTypeEntered === "call") {
        callsTotal += 2.75;
    } else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }

    callTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);

    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);

    if (totalCost >= 50) {
        totalCostElem.classList.add("danger");
    } else if (totalCost >= 30) {
        totalCostElem.classList.add("warning");
    }

    console.log(callsTotal)
}

addToBillBtnElem.addEventListener("click", textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
