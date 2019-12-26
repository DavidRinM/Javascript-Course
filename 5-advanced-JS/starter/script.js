// Function Constructor
/*
var john = {
    name: "John",
    yearofBirth: 1990,
    job: "Teacher"
};*/

var Person = function(name, yearofBirth, job)
{
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
} 

Person.prototype.calculateAge = function()
{
    console.log(2019 - this.yearofBirth);
}

Person.prototype.lastName = "Smith";

var john = new Person ("John", 1990, 'Teacher');
var jane = new Person("Jane", 1969, 'Designer');
var mark = new Person ("Mark", 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);


//******************  Object.Create
var personProto = {
    calculateAge: function(){
        console.log(2019-this.yearofBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearofBirth = 1990;
john.job = "Teacher";

var jane = Object.create(personProto,
    {
        name: { value: "Jane"},
        yearofBirth: { value: 1969},
        job: { value: "Designer"}
    });



// ******** Primitives vs Objects

//      Primitives
var a = 23;
var b = a;
a = 46;
console.log(a,b); // Values are different


//      Objects       
var obj1 = {
    name: "John",
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);  //Still are the same value

//      Functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "Lisbon"
};

function change(a, b){
    a = 30;
    b.city = "San Francisco";
}

change(age, obj);

console.log(age); //Primitive values stays as 27
console.log(obj.city); //Object value changes



// *******  First Class Functions: Passing functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i=0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){ //el = element
    return 2016 - el;
}

function isFullAge(el){
    return el >=18; //Return TRUE if el si >= 18
}

function maxHeartRate(el){
    if (el>=18 && el<=81){
        return Math.round(206.9 - (0.67 * el)); //el = age
    }
    else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

//*********** Functions returning Functions

function interviewQuestion(job){
    if (job ==="Designer"){
        return function (name){
            console.log(name + ", can you please what UX design is?");
        }
    }
    else if (job === "Teacher"){
        return function(name){
            console.log("What subject do you teach, " + namne);
        }
    }
    else{
        return function(name) {
            console.log("Hello " + name + " What do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("Teacher");
var designerQuestion = interviewQuestion("Designer");

teacherQuestion("John");

designerQuestion("John");
designerQuestion("Jane");
designerQuestion("Mark");

interviewQuestion("Teacher")("Mike");