//Conditional Logic

var studentfailingGrade = 69;
var studentpassingGrade = 70;
var extraCredit = 5;

//if the student has the minimum grade, print to the console "you pass :)"
//if the student has 70 or over

if(studentfailingGrade + extraCredit > studentpassingGrade){
    //if true the condition will perform
    console.log("you pass :)");
}else{
   //if false condition will perform
    console.log("you fail :(");
}