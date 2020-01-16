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


// Destructuring -> get data structure data into one variable

// ES5 code
var john = ["John", 26];
//var name = john[0];
//var age = john[1];


// ES6 code
const [name, age] = ["John", 26];
console.log(name);
console.log(age);

const obj = {
    firstName: "John",
    lastName: "Smith"
};

const {firstName, lastName} = obj; // Use {} cause its an object
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj; //Can change how we call a property
console.log(a);
console.log(b);

// Returning from a function
function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


// Arrays
const boxes = document.querySelectorAll(".box"); //node list

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);

//boxesArr5.forEach(function(current){
//    current.style.backgroundColor = "dodgerblue";
//});


// ES6
boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(current => current.style.backgroundColor = "dodgerblue")

//Looping through arrays

//ES5
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === "box blue"){
        continue;
    }

    //boxesArr5[i].textContent = "I changed to blue";
}


// ES6
for (const current of boxesArr6){
    if (current.className.includes("blue")){
        continue;
    }
    current.textContent = "I changed to blue";
}

//Find element in an array

// ES5
var ages = [12, 17, 8, 21, 14 ,11];
var fullAge = ages.map(function(current){
    return current >=18;
});
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);


// ES6
console.log(ages.findIndex((current) => current >=18)); //returns index when expression its true

console.log(ages.find(current => current >= 18)); // returns value



// Spread Operator
function addFourAges(a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//Pass an array into a function

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


// ES6
let sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];

const bigFamily = [...familySmith, "Lily", ...familyMiller]; //Concatenate arrays
console.log(bigFamily);


// Using with node List (What queryselectorall returns)
const header = document.querySelector("h1"); //element name
const boxes = document.querySelectorAll(".box");

const all = [header, ...boxes]; //Node list

Array.from(all).forEach(current => current.style.color = "red"); //returns an array
*/

/*
// Rest Parameters -> Multiple arguments into one array

// ES5
function isFullAge5(){ 
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(current){
        console.log((2016 - current) >=18);
    });
}

//isFullAge5(1990,1999,1965, 2016, 1987);


// ES6
function isFullAge6(...years){ //years array
    years.forEach(current => console.log((2016 - current) >= 18));
}

isFullAge6(1990,1999,1965, 2016, 1987);

// Rest Parameters -> Multiple arguments into one array

// ES5
function isFullAge5(limit){ //first argument is limit
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1); //slice starts at position 1

    argsArr.forEach(function(current){
        console.log((2016 - current) >= limit); //21 is te limit number
    });
}

isFullAge5(21, 1990,1999,1965, 2016, 1987);


// ES6
function isFullAge6(limit, ...years){ //years array
    years.forEach(current => console.log((2016 - current) >= limit));
}

isFullAge6(16, 1990,1999,1965, 2016, 1987); //16 is limit within the function



// Default Parameters

// ES5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality){
    
    lastName === undefined ? lastName ="Smith" : lastName = lastName; //If theres not argument, by default its smith
    nationality ===undefined ? nationality = "American" : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}



// ES6

function SmithPerson6(firstName, yearOfBirth, lastName = "Smith", nationality = "American"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson6("John", 1990);
var emily = new SmithPerson6("Emily", 1983, "Diaz", "Spanish");
*/



// Maps in ES6

const question = new Map();

question.set("question", "What is the official name of the latest major JavaScript version?");//First key of the new map
question.set(1, "ES5"); //1 for the first answer
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3); //correct answer
question.set(true, "correct answer"); // If answer is true
question.set(false, "wrong, please try again");

console.log(question.get("question"));
console.log(question.size);


if(question.has(4)){
    //question.delete(4);
    console.log("Answer 4 is here");
}

//question.clear(); delestes every key

question.forEach((value, key) => { //current, index, array
    console.log(`This is key ${key}, and its set to ${value}`);
});

for (let [key, value] of question.entries()){ //All entries of map using destructuring
    //console.log(`This is key ${key}, and its set to ${value}`);
    if(typeof(key) === "number"){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt("Write the correct answer"));


//question.get(ans === question.get("answer"));
console.log(question.get(ans === question.get("correct")));

