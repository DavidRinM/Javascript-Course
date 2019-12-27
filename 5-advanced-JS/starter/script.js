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
            console.log("What subject do you teach, " + name);
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

// ***************      IIFE
/*
function game(){
    var score = Math.random() * 10; //Number between 0-9
    console.log(score >= 5);
}
game();
*/
(
    function(){
        var score = Math.random() * 10; //Number between 0-9
        console.log(score >= 5);
    }
)();

//console.log(score);


(
    function(gooLuck){
        var score = Math.random() * 10; //Number between 0-9
        console.log(score >= 5 - gooLuck);
    }
)(5);

/**
        IIFE functions create data privacy and local variables
*/


/*
        CLOSURES
*/

function retirement(retirementAge){
    var a = " years left until retirement";
    return function(yearofBirth){
        var age = 2019 -yearofBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
//retirement(66)(1990);


/*
function interviewQuestion(job){
    if (job ==="Designer"){
        return function (name){
            console.log(name + ", can you please what UX design is?");
        }
    }
    else if (job === "Teacher"){
        return function(name){
            console.log("What subject do you teach, " + name);
        }
    }
    else{
        return function(name) {
            console.log("Hello " + name + " What do you do?");
        }
    }
}

                Rewriting using CLOSURES
*/

function interviewQuestion(job){
    return function(name){
        if (job ==="Designer"){
            console.log(name + ", can you please what UX design is?");
        }
        else if (job === "Teacher"){
            console.log("What subject do you teach, " + name);
        }
        else{
            console.log("Hello " + name + " What do you do?");
        }
    }
}

interviewQuestion("Teacher")("John");

/**
        Bind, Call & Apply Methods
*/

var john = {
    name: "John",
    age: 26,
    job: "Teacher",
    presentation: function(style, timeOfDay){
        if(style === "Formal"){
            console.log("Good " + timeOfDay + " Ladies and Gentlemen. I´m " + this.name + ", I´m a " + this.job + " and I´m " + this.age);
        }
        else if(style === "Friendly"){
            console.log("Hey, what´s up. I´m " + this.name + " Have a nice "+ timeOfDay);
        }
    }
};

var emily= {
    name: "Emily",
    age: 35,
    job: "Designer"
};

john.presentation("Formal", "Morning");

john.presentation.call(emily, "Friendly", "Afternoon"); // we use John´s method but with Emily information

// john.presentation.apply(emily, ["Friendly", "Afternoon"]); not gonna work, method doesn´t expect an array

var johnFriendly = john.presentation.bind(john, "Friendly"); //Bind returns a function

johnFriendly("morning");
johnFriendly("Night");

var emilyFormal = john.presentation.bind(emily, "Formal");
emilyFormal("Afternoon");

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

function isFullAge(limit, el){
    return el >= limit; //Return TRUE if el si >= 18
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); //use bind to enable two parameters
console.log(ages);
console.log(fullJapan);

/**

    CODING CHALLENGE 7
Quiz Game in the console.

1.-Build a function constructor called Question to describe a question.
    A question should include:
    a) Question Itself.
    b) The answers from which the player can choose the correct one (array, object, etc)
    c) Correct answer (Use a number)
2.-Create a couple of questions using the constructor.
3.-Store them all inside an array.
4.-Select one random question and log it into the console, together with the possible answers
(each question should have a number) HINT: write a method for he question object for this task
5.-Use Prompt function to ask the user for the correct answer. The user should input the number of the correct answer
6.-Check if the answer is correct and print to the console wether  the answer is correct or not
HINT: write another method for this.
7.-Suppose this code would be a plug in for another programmers to use in their core. So make sure that all your code
is private and doesn´t interphere with other programmers code

----------- Expert Level. --------------
8.-After you display the result, display the next random question, so that the game never ends
HINT: write a function for this and call it right after displaying the result.
9.-Be careful: After task 8, game literally never ends. Include the option to quit if the user writes exit
instead of the answer. In this case, DON´T call the function from task 8
10.-Track user´s score to make the game more fn. So each time the answer´s correct, add 1 point to the score
HINT: Use the power of closures
11.-Display the score in the console, Use another method for this

(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++){
            console.log(i +": " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (answer){
        if(answer === this.correctAnswer){
            console.log("Correct Answer!!");
        }
        else{
            console.log("Incorrect !! :(");
        }
    }

    var question1 = new Question("Is Js the best programming language?", ["Yes", "No"], 0); //Using position 0 of the array
    var question2 = new Question("Do you like programming?", ["Yes", "No"], 0);
    var question3 = new Question("Name of the Course´s teacher?", ["John", "Michael", "Jonas"], 2);

    var totalQuestions = [question1, question2, question3];

    var n = Math.floor(Math.random() * totalQuestions.length); //Will give a number between 0-2

    totalQuestions[n].displayQuestion();

    var answer = parseInt(prompt("Select the correct answer: "));

    totalQuestions[n].checkAnswer(answer);
    }
)();
*/

(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++){
            console.log(i +": " + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (answer, callback){
        var sc;
        if(answer === this.correctAnswer){
            console.log("Correct Answer!!");
            sc = callback(true); //Score returns something, we equal to something
        }
        else{
            console.log("Incorrect !! :(");
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log("Current score is: " + score);
        console.log("---------------------");
    }

    function score (){
        var score = 0;
        return function (correct){
            if (correct){// If answer´s correct
                score++;
            }
            return score;
        }
    }

    var question1 = new Question("Is Js the best programming language?", ["Yes", "No"], 0); //Using position 0 of the array
    var question2 = new Question("Do you like programming?", ["Yes", "No"], 0);
    var question3 = new Question("Name of the Course´s teacher?", ["John", "Michael", "Jonas"], 2);
    
    var totalQuestions = [question1, question2, question3];

    var keepscore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * totalQuestions.length); //Will give a number between 0-2
    
        totalQuestions[n].displayQuestion();
    
        var answer = prompt("Select the correct answer: ");

        if(answer !== "exit"){
            totalQuestions[n].checkAnswer(parseInt(answer), keepscore);
            nextQuestion(); 
        }
    }

    nextQuestion();
}
)();