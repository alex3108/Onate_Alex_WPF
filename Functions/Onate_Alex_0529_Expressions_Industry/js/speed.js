//Create a function that calculates the speed you drive


//Prompt user for Distance and Time 
var distance = prompt("Let's calculate the distance you drove in miles!\nPlease enter the distance:");

//validate prompt
//Use while loop
while(isNaN(distance)){
	//re-Prompt for a number
	distance = prompt("Let's calculate the distance you drove in miles!\nPlease enter the distance:");
}

//prompt for Time
var time = prompt("Let's calculate the time you drove in miles!\nPlease enter time:");

//Validate Time
while(isNaN(time)){
 //Re-prompt for time
   time = prompt("Let's calculate the time you drove in miles!\nPlease enter time:");

}



//Create a function to calc the speed you drive
function speedPerHour(d, t){ //parameter - local variables inside of function

	//Create a variable to hold the speed you drove per hour
	var speed= d*t;
	
	//return the area outside of function
	return speed;

}


//Function call
//Catch the Returned value of the speed you drive
var results = speedPerHour(distance, time); //arguments sent in to function

console.log("You drove "+results+" miles per hour.");
alert("You drove "+results+" miles per hour.");





