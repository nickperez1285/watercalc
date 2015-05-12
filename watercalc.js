

function perRound(num, precision) {
	var precision = 10; //default value if not passed from caller, change if desired
	// remark if passed from caller
	precision = parseInt(precision); // make certain the decimal precision is an integer
    var result1 = num * Math.pow(10, precision);
    var result2 = Math.round(result1);
    var result3 = result2 / Math.pow(10, precision);
    return zerosPad(result3, precision);
}

function zerosPad(rndVal, decPlaces) {
    var valStrg = rndVal.toString(); // Convert the number to a string
    var decLoc = valStrg.indexOf("."); // Locate the decimal point
    // check for a decimal 
    if (decLoc == -1) {
        decPartLen = 0; // If no decimal, then all decimal places will be padded with 0s
        // If decPlaces is greater than zero, add a decimal point
        valStrg += decPlaces > 0 ? "." : "";
    }
    else {
        decPartLen = valStrg.length - decLoc - 1; // If there is a decimal already, only the needed decimal places will be padded with 0s
    }
     var totalPad = decPlaces - decPartLen;    // Calculate the number of decimal places that need to be padded with 0s
    if (totalPad > 0) {
        // Pad the string with 0s
        for (var cntrVal = 1; cntrVal <= totalPad; cntrVal++) 
            valStrg += "0";
        }
    return valStrg;
}
// send the value in as "num" in a variable

// clears field of default value
function clear_field(field) {
		if (field.value==field.defaultValue) {
			field.value=''
		}
	}

function compute(form)  {
	var bathtotal = Math.round(((form.showers.value * form.showermin.value * form.showerflow.value) + (form.baths.value / 7 * 40))/form.people.value);
	var toiletday = Math.round((form.people.value * form.toiletflow.value * form.toiletflush.value)/form.people.value);
	var faucetday = Math.round((form.faucet.value * form.people.value * form.faucetmin.value * 3)/form.people.value);
	var dishwasherday = Math.round(((form.dishwasher.value * form.dishwasherflow.value)/7)/form.people.value);
	var laundryday = Math.round(((form.laundry.value * form.laundryload.value)/7)/form.people.value);
	var dishday = Math.round((form.dishhand.value * form.dishmin.value * 3)/form.people.value);
	var lawnday = Math.round(((form.lawn.value * form.lawnmin.value * 15)/7)/form.people.value);
	var otherday = Math.round(((form.other.value * 10)/7)/form.people.value);
	var indoorday = Math.round(bathtotal + toiletday + faucetday + laundryday + dishwasherday + dishday);
	var outdoorday = Math.round(lawnday + otherday);
	var totalday = Math.round(indoorday + outdoorday);
	var totalmonth = Math.round(totalday * 30.4);
	var totalyear = Math.round(totalday * 365);
	var DWAday = 207;
	var DWAmonth = DWAday*30;
	var DWAyear = DWAday*365;
	var indoorcost = (indoorday * 0.00295).toFixed(2) 
	var outdoorcost = (outdoorday * 0.00295).toFixed(2) ; 
	var daycost = (totalday * 0.00295).toFixed(2);
	var monthcost = (totalmonth * 0.00295 ).toFixed(2); 
	var yearcost = (totalyear * 0.00295).toFixed(2); 
	form.bathtotal.value = bathtotal;
	form.toiletday.value = toiletday;
	form.faucetday.value = faucetday;
	form.laundryday.value = laundryday;
	form.dishwasherday.value = dishwasherday;
	form.dishday.value = dishday;
	form.lawnday.value = lawnday;
	form.otherday.value = otherday;
	form.indoorday.value = indoorday;
	form.outdoorday.value = outdoorday;
	form.totalday.value = totalday;
	form.totalmonth.value = totalmonth;
	form.totalyear.value = totalyear;
	form.DWAday.value = DWAday;
	form.DWAmonth.value = DWAmonth;
	form.DWAyear.value = DWAyear;
	form.indoorcost.value= indoorcost ;
	form.outdoorcost.value = outdoorcost;
	form.daycost.value = daycost;
	form.monthcost.value = monthcost ;
	form.yearcost.value = yearcost ;


   if((form.DWAday.value-form.totalday.value)>0) {

              form.useage.value = ("Every year, your household uses " + (form.DWAyear.value - form.totalyear.value) + " gallons per capita LESS than the Desert Water Agency per capita water useage.");

              }
              else {
form.useage.value = ("Every year, your household uses " + (form.totalyear.value-form.DWAyear.value ) + " gallons per capita MORE than the Desert Water Agency per capita water useage.");

              }

}
function ClearForm(form)  {
	form.bathtotal.value = "";
	form.toiletday.value = "";
	form.faucetday.value = "";
	form.laundryday.value = "";
	form.dishwasherday.value = "";
	form.dishday.value = "";
	form.lawnday.value ="";
	form.otherday.value = "";
	form.indoorday.value = "";
	form.outdoorday.value = "";
	form.totalday.value = "";
	form.totalmonth.value = "";
	form.totalyear.value = "";
	form.DWAday.value = "";
	form.DWAmonth.value = "";
	form.DWAyear.value = "";
	form.indoorcost.value = "";
	fotm.outdoorcost.value = "";
	form.daycost.value = "";
	form.monthcost.value = "" ;
	form.yearcost.value = "" ;

	form.useage.value = "";
	form.showers.value="";
	form.baths.value="";
	form.people.value="";
	form.toiletflush.value="";
	form.faucet.value="";
	form.faucetmin.value="";
	form.dishwasher.value="";
	form.laundry.value="";
	form.dishhand.value="";
	form.dishmin.value="";
	form.lawn.value="";
	form.lawnmin.value="";
	form.other.value="";
	form.showermin.value="";

}
