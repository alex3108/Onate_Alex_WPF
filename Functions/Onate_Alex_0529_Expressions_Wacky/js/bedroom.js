//Create a function that calculates the Area of a Bedroom


//Prompt user for Length and Width 
var width = prompt("Let's calculate the area of a Bedroom!\nPlease enter a width:");

//validate prompt
//Use while loop
while(isNaN(width)){
	//re-Prompt for a number
	width = prompt("Let's calculate the area of a Bedroom!\nPlease enter a width:");
}

//prompt for length

var length  = prompt("Type in a length:");

//Validate length
while(isNaN(length)){
 //Re-prompt for length
 length  = prompt("Type in a length:");

}


//Create a function to calc area of a bedroom
function bedroomArea(w, l){ //parameter - local variables inside of function

	//Create a variable to hold the area
	var roomarea= w*l;
	
	//return the area outside of function
	return roomarea;

}

//Function call
//Catch the Returned value of area with a variable
var results = bedroomArea(width, length); //arguments sent in to function

console.log("The area of the bedroom is "+results+" feet.");
alert("The area of the bedroom is "+results+" feet");