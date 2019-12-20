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

console.log(firstName + ' ' + age);

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

//Basic Operator

var year, yearJohn, yearMark;
year = 2018;
yearJohn = year - 28;
yearMark = year - 33;

ageJohn = 28;
ageMark = 33;

console.log(yearJohn);
console.log(yearMark);

//Math 
console.log(year + 2);
console.log(year * 2);
console.log(year/10);

//Logical
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//Type of Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark´s older than John");
console.log(typeof x);

/*
    Operator Precedence
*/

var now = 2018;
var yearJohn = 1989;
var legalAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= legalAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x,y;
x = y = (3+5) * 4 - 6; //8*4 - 6 ==26

console.log(x,y); 

//More Operators

x = x*2; // Same as x *= 2;
console.log(x);
x++;
console.log(x);