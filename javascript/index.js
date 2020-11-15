// used in index.html

function sayHey() {
    console.log("Hey" );
}

function conversation (person, job) {
    return "Hey " + person + "!" + " Are you an " + job + "?";
}

// Implementing methods
const pet = {
    name: "Scooby",
displayName: function(){console.log("Scooby the Dog");}
}

// Comparisions === checks if values are equal, returns the boolean of true or false
const apples = 'apples';
const oranges = 'oranges';
const isEqual = apples === oranges;
console.log('Are apples and oranges the same? ' + isEqual); 

// The opposite of === is !==. Return true if they are not equal and false if they are
const apples = 'apples';
const oranges = 'oranges';
const isEqual = apples !== oranges;
console.log('Are apples and oranges the same? ' + isEqual);

// Greater or less than > <
const volunteers = 20;
const students = 24;
const pizzas = 25;

const moreStudents = students > volunteers
console.log('Are there more students then volunteers?' + moreStudents);

const lessStudents = students < pizzas;
console.log('Are there fewer students than pizzaa?' + lessStudents);

const enoughPizzas = (volunteers + student) < pizzas;
console.log ('Do we have enough pizzas for everybody?' + enoughPizzas);

// TASK my age and minimum driving age

const myAge = 28;
const drivingAge = 17;

const oldEnough = (myAge > drivingAge);
console.log ('Am I old enough to drive?' + oldEnough);

// If statement - code execute if something is true
const iAMAQueen = true:
if (iAMAQueen) {
    console.log ('yes, I am a Queen');
}
const volunteers = 20;
const students = 24;
const pizzas = 25;

const totalPeople = volunteers + students

if (totalPeople > pizzas) {
console.log('We have more people than pizzas!');
} else {
    console.log ('We have more people than pizzas.')
}

if (students > pizzas)
console.log('We hav more students than pizzas!');

// another way to write if/else statments
function getFee(isMemeber) {
    return (isMemeber ? '£2.00' : '£10.00');
}
// TASK
function myGrade(marks) {
    myGrade(70);
if (marks > 90){
    return('You got an A+');
}
if (90 <= marks > 80 ){
    return('You got an A');
}
if (80 <= marks > 70) {
    return('You got a B');
}
if (70 <= marks > 60) {
    return('You got a C');
}
if (60 <= marks > 50) {
    return('You got a D');
}
if (50 <= marks > 40) {
    return('You got a E');
}
if (40 <= marks > 30) {
    return('You got a F');      
}
}
// Switch statments - Homework
let mark = 90

switch (true) {
    case (mark > 90):
        console.log('A+');
        break;
    case (mark > 80 && mark <= 90):
        alert ('A');
        break;
    case (mark > 70 && mark <= 80):
        console.log('B');
}
