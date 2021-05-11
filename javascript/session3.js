// used in index.html on line 15

// ******* While loop and For loop tasks *******
// 

// Use this randomNumber inside of the while/for loops to generate a random number
const randomNumber = Math.round(Math.random() * 10);

let i = 0;

while (i < 10) {
    console.log(randomNumber);
    i++;
}

//FOR loops
let total = 0;
let i;

for (i = 1; i <= 10; i = i++){
    total = total + i;
}

console.log('Total: ' + total);


for (let i = 10; i <=10; i++){
    console.log(randomNumber);
}
   

// ******* Loops and Array Methods task *******

// This array of objects is to be used in the final task of the session
// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

let sortedPeople = people.sort()


// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
//function compare(a, b) {
//const personA = a.age;
//const personB = b.age;

//return personA > personB ? 1 : -1;
//}

document
  .querySelector('#remove-handler')
  .addEventListener('mousemove', randomNumber);

