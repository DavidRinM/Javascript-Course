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