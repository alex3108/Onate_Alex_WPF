//Logic Operators

var winningTicket = 500;
var notWinner = 0;
var winner = true;

//if the ticket is less than the winning ticket and if the winner is true

if( notWinner < winningTicket || winner === true){
    //if true the condition will perform
    console.log("you won!");
}else{
   //if false condition will perform
    console.log("you lost!");
}