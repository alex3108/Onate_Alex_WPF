//Ternary Operators

var player = 0;
var warGame;

var welcome = ("Welcome to War");
console.log(welcome);
alert(welcome);

var playerName = prompt("Enter your name");
console.log(playerName);
alert(playerName);

var begin = ("Lets begin");
console.log(begin);
alert(begin);

var player = prompt("Enter your card number");
//If the player has a 10 or better he wins, otherwise he losses the game
//Since were are not using strings, but numbers instead "J,Q,K,A" will be "11,12,13,14"
warGame = (player > 10) ? "You Won" : "You Lost";

var thanks = ("Thanks for playing");

//Validating prompts

console.log(warGame);
alert(warGame);
console.log(thanks);
alert(thanks); 
