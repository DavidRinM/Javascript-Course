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