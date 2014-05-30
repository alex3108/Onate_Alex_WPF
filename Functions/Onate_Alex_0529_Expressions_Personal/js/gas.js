//Create a function that calculates the amount of money you spend in gas


//Prompt user for your daily round trip commute 
var milesDailycommute = prompt("How many miles is your daily round trip commute distance from home to work?");

//validate prompt
//Use while loop
while(isNaN(milesDailycommute)){
	//re-Prompt for a number
	milesDailycommute = prompt("How many miles is your daily round trip commute distance from home to work?");
}

//prompt for days you work normally
var daysWorkmonth = prompt("How many days per month do you normally work?");

//Validate prompt
while(isNaN(daysWorkmonth)){
 //Re-prompt for time
   daysWorkmonth = prompt("How many days per month do you normally work?");

}

//prompt for what you normally pay for gas
var payGallongas = prompt("How much do you normally pay for a gallon of gas?");

//Validate prompt
while(isNaN(payGallongas)){
 //Re-prompt for time
   payGallongas = prompt("How much do you normally pay for a gallon of gas?");

}



//Create a function to calc the amount of money you spend in gas
function amountMoneygas(m, d, p){ //parameter - local variables inside of function

	//Create a variable to hold amount you spend in gas
	var gas= m*d*p/100;
	
	//return the area outside of function
	return gas;

}


//Function call
//Catch the Returned value of the speed you drive
var results = amountMoneygas(milesDailycommute, daysWorkmonth, payGallongas ); //arguments sent in to function

console.log("You spend "+results+" dollars a month.");
alert("You spend "+results+" dollars a month.");





