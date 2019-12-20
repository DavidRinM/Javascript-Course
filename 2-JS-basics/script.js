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

/*

Coding Challenge 1.
Mark & John are trying to compare their BMI (Body Mass Index), which is calculated
using the formula:

    BMI = mass / height^2
mass in kg & height in m

1.- Store Marks & John´s mass & Height in Variables.
2.-Calculate both BMI´s
3.-Create Boolean Variable containing information about wether Mark has a higher BMI than John
4.-Print a string to the console containing the variable of step 3 (Something like "Is Mark´s BMI 
Higher than John´s? True")
*/

// 1.-
var markMass = prompt("Mark´s Mass: ");
var markHeight = prompt("Mark´s Height: ");

var johnMass = prompt("John´s Mass: ");
var johnHeight = prompt("John´s Height: ");

// 2.-
var markBMI = markMass / (markHeight**2);
var johnBMI = johnMass / (johnHeight**2);
console.log(markBMI,johnBMI);

// 3.-
var bmiBool = markBMI > johnBMI;

// 4.-
console.log("Is Mark´s BMI Higher than John´s? " + bmiBool);

/*
If - Else statements
*/

var firstName = "John";
var civilStatus = "Single";
if (civilStatus == "Married") {
    console.log(firstName + " is Married");
}
else {
    console.log(firstName + " will hopefully be Married soon");
}

//Using Bolleand
var isMarried = true;
if (isMarried) {
    console.log(firstName + " is Married");
}
else {
    console.log(firstName + " will hopefully be Married soon");
}


/*

Boolean Logic

*/

var firstName = "John";
var age = 16;

if (age < 13) { 
    console.log(firstName + " is a boy");
}
else if (age < 20) { //Age between 13 - 20
    console.log(firstName + " is a teenager");
}
else if (age >= 20 && age < 30) {
    console.log(firstName + " is a young man");
}
else { // Age > 20
    console.log(firstName + " is a man");
}

/*
    Ternary Operator & Switch Statements
*/

var firstName = "John";
var age = 16;

//Ternary Operator
age >=18 ? console.log(firstName + " drinks beer") //like if statement
:   console.log(firstName + " drinks juice") //like else statemente

var drink = age>=18 ? "beer" : "juice"; //drink = beer if age>=18, else drink= juice
console.log(drink);

//Comparing to an elif

if (age >= 18){
    var drink = "beer";
}
else { 
    var drink = "juice";
}

//Switch
var job = "Teacher";
switch (job){
    case "Teacher":
    case "Instructor":
        console.log(firstName + " teaches kids how to code"); break;
    case "Driver":
        console.log(firstName + " drives an uber"); break;
    default:
        console.log(firstName + " does something else"); break;
}

/*
var firstName = "John";
var age = 16;

if (age < 13) { 
    console.log(firstName + " is a boy");
}
else if (age < 20) { //Age between 13 - 20
    console.log(firstName + " is a teenager");
}
else if (age >= 20 && age < 30) {
    console.log(firstName + " is a young man");
}
else { // Age > 20
    console.log(firstName + " is a man");
}
*/

switch(true){
    case age < 13:
        console.log(firstName + " is a boy"); break;
    case age <20:
        console.log(firstName + " is a teenager"); break;
    case age>=20 && age<30:
        console.log(firstName + " is a young man"); break;
    default:
        console.log(firstName + " is a man"); break;
}

/*
Truthy and Falsy Values & Equiality Operators

Falsy Values:   Undefined, null, 0, "", NaN
Truthy Values:  Not Falsy Values
*/

var height;
height = 23;

if (height || height ==0){
    console.log("Variable defined"); //Evaluates if varible exists
}
else{
    console.log("Variable hasn´t been defined");
}

// == Data types do no need to be de same
// === Data typs must be the same

/*

    Coding Challenge 2
John & Mike both play basketball in different teams. In the last 3 games,
John´s team scored 89, 120 and 103 points, whiles Mike´s scored 116, 94 and 123.

1.- Calculate Average score for each team.
2.- Decide which team wins in average(highest ave) and print in console. Include average score.
3.- Change scored to show different winner. Don´t forget there might be a draw.

4.- EXTRA: Mary also plays basketball and her team scored 97, 134 and 105. Like before,
log the average winner.
5.- Like before, change scores to generate different winners
*/


// 1.-
var jonhGame1 = 89;
var jonhGame2 = 120;
var jonhGame3 = 103;
var averageJohn = (jonhGame1 + jonhGame2 + jonhGame3)/3;

var mikeGame1 = 116;
var mikeGame2 = 94;
var mikeGame3 = 123;
var averageMike = (mikeGame1 + mikeGame2 + mikeGame3)/3;

// 2.-
if (averageJohn>averageMike){
    console.log("John wins with an average of: " + averageJohn);
}
else if (averageJohn<averageMike){
    console.log("Mike wins with an average of: " + averageMike);
}
else{
    console.log("There´s a draw");
}
 // 3.-
 averageJohn = 100;
 averageMike = 50;
 if (averageJohn>averageMike){
    console.log("John wins with an average of: " + averageJohn);
}
else if (averageJohn<averageMike){
    console.log("Mike wins with an average of: " + averageMike);
}
else{
    console.log("There´s a draw");
}

// 4.-
var maryGame1 = 97;
var maryGame2 = 134;
var maryGame3 = 105;
var averageMary = (maryGame1 + maryGame2 + maryGame3)/3;

if (averageJohn>averageMike){ //John Greater than mike
    if (averageJohn>averageMary){ // John greates
        console.log("John wins with: "+ averageJohn);
    }
    else{
        if(averageMary > averageMike){ //Mary greatest
            console.log("Mary wins with: " + averageMary);
        }
    }
}
else{ //Mike greater than John
    if(averageMike>averageMary){ //Mike greatest
        console.log("Mike wins with: " + averageMike);
    }
    else{ // Mike worse than Mary
        if(averageMary>averageJohn){ // Mary the greatest
            console.log("Mary wins with: " + averageMary);
        }
    }
}

averageJohn = 5;
averageMary = 60;
averageMike = 80;
if (averageJohn>averageMike && averageJohn>averageMary){
    console.log("John wins with: " + averageJohn);
}
else if (averageMike>averageJohn && averageMike>averageMary){
    console.log("Mike wins with: " + averageMike);
}
else if (averageMary>averageJohn && averageMary>averageMike){
    console.log("Mary wins with: " + averageMary);
}
else{
    console.log("Theres a draw");
}


/*
    Functions
 */

 function calculateAge(birthYear){
    return 2018 - birthYear;
 }

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn);
console.log(ageMike);
console.log(ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement>0){
        console.log(firstName + " retires in " + retirement + " years");
    }
    else{
        console.log("Already retired");
    }
}

yearsUntilRetirement(1990, "John");