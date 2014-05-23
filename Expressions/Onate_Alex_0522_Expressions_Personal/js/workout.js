//JavaScript Files

//How many times a week do I work out
var workoutTimesWeek = prompt("Number of times you workout a week?");
//How long is each session
var workoutTimesSession = prompt("How long per session in minutes?");
//How many calories you burn per session
var workoutTimesCalories = prompt("Number of calories you burn per session?");


//Number of minutes you work out in one week
var minutesWorkoutPerWeek = workoutTimesWeek * workoutTimesSession;

//Number of calories burned off in a week
var caloriesPerWeek = workoutTimesWeek * workoutTimesCalories;

//Number of times per month
var minutesWorkoutPerMonth = minutesWorkoutPerWeek * 4;

//Number of calories burned off in a week
var caloriesPerMonth = caloriesPerWeek * 4;


console.log("You work out "+minutesWorkoutPerWeek+" minutes in a week and you burn "+caloriesPerWeek +" calories!");

alert("You work out "+minutesWorkoutPerWeek+" minutes in a week and you burn "+caloriesPerWeek +" calories!");

console.log("This means you you work out "+minutesWorkoutPerMonth+" minutes in a month and you burn "+caloriesPerMonth +" calories!");

alert("This means you you work out "+minutesWorkoutPerMonth+" minutes in a month and you burn "+caloriesPerMonth +" calories!");

console.log("Great Job")

alert("Great Job")