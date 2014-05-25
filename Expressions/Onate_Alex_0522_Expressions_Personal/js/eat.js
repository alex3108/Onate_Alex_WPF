//JavaScript Files

//How many times a week do I eat
var eatTimesWeek = prompt("Number of times you eat a week?");
//How many calories per meal
var eatCaloriesMeal = prompt("Number of calories per day?");
//How many desserts a week do I eat
var dessertsNumWeek = prompt("How many desserts a week do you eat?");


//Number of times eat a week
var numberTimesEatWeek = eatTimesWeek * 4;

//Number of calories you eat a week
var caloriesPerWeek =  eatCaloriesMeal * 7;

//Number of calories you gain per month
var gainCaloriesPerMonth = caloriesPerWeek * 12 ;

//Number of calories you gain per year
var gainCaloriesPerYear = gainCaloriesPerMonth * 12;


console.log("You eat "+numberTimesEatWeek+" times a month and you gain "+caloriesPerWeek +" calories a month!");
alert("You eat "+numberTimesEatWeek+" times a month and you gain "+caloriesPerWeek +" calories a month!");

console.log("Therefore you gain "+gainCaloriesPerMonth+" calories a month and "+gainCaloriesPerYear +" calories a year!");
alert("Therefore you gain "+gainCaloriesPerMonth+" calories a month and "+gainCaloriesPerYear +" calories a year!");

console.log("Great Job")
alert("Great Job")




