//Conditional Logic

var playersMinimunHeight = 196;


//if the player in under the minimun height, print to the console "your not tall enough."
var playersHeight = prompt("Enter your height in meters");

//Validate that the user entered a number and didn't leave it blank
//If statement first eventually while loop

//isNaN - Is not a number -    true is its a text string and false is it is a #
if(isNaN( playersMinimunHeight) ||  playersMinimunHeight ==="" ){
	//prompt for a number not a text string
	 playersMinimunHeight = prompt("Enter your height in meters, please ONLY enter numbers:");
}


//Testing to see if the player meets the height requirements
if(playersMinimunHeight >= playersHeigh){
    console.log("Congratulations you meet the height requirements.");
    alert("Congratulations you meet the height requirements.");
}else if(playersMinimunHeight+playersHeigh <196){
      console.log("Sorry you fail the height requirements.");
      alert("Sorry you fail the height requirements.");
}else {
       console.log("Sorry you fail")
       alert("Sorry you fail")
}

 