//Conditional Logic

var studentpassingGrade = 70;
var extraCredit = 5;


//if the student has the minimum grade, print to the console "you pass :)"
//if the student has 70 or over
var studentGrade = prompt("Enter your grade");

//Validate that the user entered a number and didn't leave it blank
//If statement first eventually while loop

//isNaN - Is not a number -    true is its a text string and false is it is a #
if(isNaN(studentGrade) || studentGrade ==="" ){
	//prompt for a number not a text string
	studentGrade = prompt("Enter your grade, please ONLY enter numbers:");
}

// Prompt the user for if they did extra credit Y or N
var userExtra = prompt("Did you get extra credit?\n Y or N");

//Validate extra credit  
//Reprompt if they type in ANYTHING except Y or N
if(userExtra != "Y" && userExtra != "N" ){
  //reprompt the user
   userExtra = prompt("Did you get extra credit?"); 
} 
/*
if(studentGrade >= studentpassingGrade){
    //if true the condition will perform
    console.log("you pass :)");
      alert("you pass :)");
}else{
   //if false condition will perform
    console.log("you fail :(");
    alert("you fail :(");
}
*/

/*
//If extra credit points are asked Y or N

if(studentGrade >= 70 );


else if(studentExtra ==== "Y" && studentGrade+extraCredit >=70 ); //then the person passes

else if(studentExtra === "Y" && studentGrade +extraCredit <70 ); //person fails - different message 

//else //catch all  - person fails; 
*/


//Testing to see if student pass
if(studentGrade >= studentpassingGrade){
    console.log("Congratulations you pass even without extra credit");
    alert("Congratulations you pass even without extra credit");
}else if(userExtra === "Y" && studentGrade+extraCredit >=70 ){
      console.log("Congratulations you pass with extra credit");
    alert("Congratulations you pass with extra credit");
}else if(userExtra === "Y" && studentGrade+extraCredit <70){
      console.log("Sorry you fail even with extra credit");
      alert("Sorry you fail even with extra credit");
}else {
       console.log("Sorry you fail")
       alert("Sorry you fail")
}

 