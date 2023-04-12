// get a reference to the sms or call radio buttons

//get a reference to the add button
const radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");

const callTotalElemRB = document.querySelector(".callTotalTwo");
const smsTotalElemRB = document.querySelector(".smsTotalTwo");
const totalCostElemRB = document.querySelector(".totalTwo");
const totalRB = document.querySelector(".totalCls")

//create a variable that will keep track of the total bill

let callsTotalRB = 0;
let smsTotalRB = 0;

//add an event listener for when the add button is pressed

function radioBillTotal() {

    const checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    if (checkedRadioBtn) {
        var billItemTypeSelected = checkedRadioBtn.value;
    }

    if (billItemTypeSelected === "call") {
        callsTotalRB += 2.75;
    } else if (billItemTypeSelected === "sms") {
        smsTotalRB += 0.75;
    }

    callTotalElemRB.innerHTML = callsTotalRB.toFixed(2);
    smsTotalElemRB.innerHTML = smsTotalRB.toFixed(2);

    let totalCostRB = callsTotalRB + smsTotalRB;
    totalCostElemRB.innerHTML = totalCostRB.toFixed(2);

    if (totalCostRB > 50) {
        totalRB.classList.add("danger")
    } else if (totalCostRB > 30) {
        totalRB.classList.add("warning")
    }
}

radioBillAddBtnElem.addEventListener("click", radioBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
