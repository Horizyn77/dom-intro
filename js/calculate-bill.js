//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn");

//get a reference to the billTotal element

const billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString

const billStringElement = document.querySelector(".billString");

const totalClElement = document.querySelector(".totalCl")

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

function totalPhoneBill(callsAndSmss) {
	var callsAndSmssArray = callsAndSmss.split(",");
  	var callCount = 0;
  	var smsCount = 0;
  
  	for (var i = 0; i < callsAndSmssArray.length; i++) {
    	callsAndSmssArray[i] = callsAndSmssArray[i].trim();
      
      	if (callsAndSmssArray[i] === "call") {
        	callCount++;
        } else if (callsAndSmssArray[i] === "sms") {
        	smsCount++;
        }
    }
  
    var callCost = callCount * 2.75;
    var smsCost = smsCount * 0.75;
  	var totalCost = callCost + smsCost;
  
  return totalCost.toFixed(2);
}

function calculateBtnClicked() {
    var billStringInput = billStringElement.value;
    var roundedTotal = totalPhoneBill(billStringInput);
    billTotalElement.innerHTML = roundedTotal;

    if (roundedTotal > 30) {
      totalClElement.classList.add("danger")
    } else if (roundedTotal > 20) {
      totalClElement.classList.add("warning")
      totalClElement.classList.remove("danger")
    } else if (roundedTotal <= 20) {
      totalClElement.classList.remove("warning")
    }
}

calculateBtnElement.addEventListener("click", calculateBtnClicked);

//link the function to a click event on the calculate button
