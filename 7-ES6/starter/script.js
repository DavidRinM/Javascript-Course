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
*/


// Arrow Function 2

// ES5 code
var box5 = {
    color: "green",
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector(".green").addEventListener("click", function(){
            var str = "This is box number " + self.position + " and it is " + self.color;
            alert(str);
        });
    }
};

//box5.clickMe();

// ES6 code
const box6 = {
    color: "green",
    position: 1,
    clickMe: function(){
        document.querySelector(".green").addEventListener("click", () => {
            const str = "This is box number " + this.position + " and it is " + this.color;
            alert(str);
        });
    }
};

//box6.clickMe();

function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(element){
        return this.name + " is friend with " + element;
    }.bind(this));

    console.log(arr);
}

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends){
    const arr = friends.map((element) => `${this.name} is firends with ${element}`);
    console.log(arr);
}

new Person("Mike").myFriends6(friends);