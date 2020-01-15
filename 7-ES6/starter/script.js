/*
// Let & Const

// ES5 code
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

//ES6 code
const name6 = "Jane Smith"; //const for constant var´s that won´t change
let age6 = 23; //Let for varibles that will change
name6 = "Jane Miler"; //Will appear an error


//ES5 code
function driversLicense5(passedtest){
    if(passedtest){
        let firstName = "John";
        const yearOfBirth = 1990;
    }
    console.log(firstName + " born in " + yearOfBirth + " can drive a car.");
}

driversLicense(true);


//ES6 code
function driversLicense6(passedtest){

    let firstName;
    const yearOfBirth = 1990;
    if(passedtest){
        firstName = "John"; // can only declare let variables in an inner block
    }
    console.log(firstName + " born in " + yearOfBirth + " can drive a car.");
}

driversLicense6(true);


let i = 23;
for (let i = 0; i < 5; i++){ // block scope variables
    console.log(i);
}

console.log(i); // Will print 23


// Blocks & IIFE´s

// ES6
{
    const a = 1;
    let b = 2;
}

console.log(a + b); // Data privacy

// IIFE in ES5
(function(){
    var c = 3;
})();

console.log(c);


// Strings

let firstName = "John";
let lastName = "Smith";

const yearOfBirth = 1990;

function calcAge(yearOfBirth){
    return 2020 - yearOfBirth;
}

// ES5
console.log("This is " + firstName + " " + lastName + " .He was born in " + yearOfBirth + ". He is " + calcAge(yearOfBirth));

// ES6
console.log(`This is ${firstName} ${lastName}.He was born in ${yearOfBirth}. He is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J'));
console.log(n.startsWith('j')); // Not the same

console.log(n.endsWith('h'));

console.log(n.includes(' '));

console.log(`${firstName} `.repeat(5));
*/


// Arrow Functions

const years = [1990, 1965, 1982, 1937];

// ES5 code
var ages5 = years.map(function(element){
    return 2020 - element;
});
console.log(ages5);

// ES6 code
let ages6 = years.map(element => 2020 - element);
console.log(ages6);

ages6 = years.map((element, index) => `Age element ${index+1}: ${2020-element}`);
console.log(ages6);

ages6 = years.map((element,index) => {
    const now = new Date().getFullYear();
    const age = now - element;

    return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);