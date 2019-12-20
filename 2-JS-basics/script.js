/*
Variables & Data Types
*/
/*
var firstName = 'John';
var lastName = 'Smith';
var age = 28;

var fullAge = true;

var job;
console.log(firstName);
console.log(fullAge);
console.log(job);

job = 'Teacher';
console.log(job);  //Single Line Comment
*/
/*
Variable Mutation & Type Coercion
*/

//Typer Coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age)

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' Year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'Twenty Eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' Year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What´s his last name?');
console.log(firstName + ' ' + lastName);