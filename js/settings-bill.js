// get a reference to the sms or call radio buttons

// get refences to all the settings fields

const callCostSettingElem = document.querySelector(".callCostSetting");
const smsCostSettingElem = document.querySelector(".smsCostSetting");
const warningLevelSettingElem = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
const addBtnElem = document.querySelector(".addBtn");

const callTotalSettingsElem = document.querySelector(".callTotalSettings");
const smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
const totalSettingsElem = document.querySelector(".totalSettings");
const totalClassSettingsElem = document.querySelector(".totalClass");


//get a reference to the 'Update settings' button
const updateSettingsElem = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
let callCostSettingVal = 0;
let smsCostSettingVal = 0;
let warningLevelSettingVal = 0;
let criticalLevelSettingVal = 0;
// create a variables that will keep track of all three totals.

let callTotalVal = 0;
let smsTotalVal = 0;
let totalVal = 0;

//add an event listener for when the 'Update settings' button is pressed

function setSettings() {
    callCostSettingVal = parseFloat(callCostSettingElem.value);
    smsCostSettingVal = parseFloat(smsCostSettingElem.value);
    warningLevelSettingVal = parseFloat(warningLevelSettingElem.value);
    criticalLevelSettingVal = parseFloat(criticalLevelSettingElem.value);

    if (totalVal <= criticalLevelSettingVal) {
        totalClassSettingsElem.classList.remove("danger");
        addBtnElem.disabled = false;
    }
    
    if (totalVal <= warningLevelSettingVal) {
        totalClassSettingsElem.classList.remove("warning");
    }
}
//add an event listener for when the add button is pressed

updateSettingsElem.addEventListener("click", setSettings)

function calculateBillTotal() {

    const checkedBtnSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedBtnSettings) {
        var billSettingsSelected = checkedBtnSettings.value;
    }

    if (billSettingsSelected === "call") {
        if (callCostSettingVal > 0) {
            callTotalVal += callCostSettingVal;
        } else {
            callTotalVal += 2.75; 
        } 
    } else if (billSettingsSelected === "sms") {
        if (smsCostSettingVal > 0) {
            smsTotalVal += smsCostSettingVal;
        } else {
            smsTotalVal += 0.75;
        }
    }

    callTotalSettingsElem.innerHTML = callTotalVal.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalVal.toFixed(2);

    totalVal = callTotalVal + smsTotalVal;
    totalSettingsElem.innerHTML = totalVal.toFixed(2);

    if (totalVal > criticalLevelSettingVal && criticalLevelSettingVal !== 0) {
        totalClassSettingsElem.classList.add("danger");
        addBtnElem.disabled = true;
    } else if (totalVal > warningLevelSettingVal && warningLevelSettingVal !== 0) {
        totalClassSettingsElem.classList.add("warning");
    } 
}

addBtnElem.addEventListener("click", calculateBillTotal)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
