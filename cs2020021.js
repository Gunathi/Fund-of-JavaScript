let name = "Nicole";
undefined

typeof(name);
'string'

let year = 2023;
undefined

typeof(year);
'number'

console.log("My bot's name is " + name);
VM2924:1 My bot's name is Nicole
undefined

console.log("she born in " + year);
VM3080:1 she born in 2023
undefined

console.log("she was cretaed in " + year);
VM3133:1 she was cretaed in 2023

//const variable declaration

const age = 22;
undefined
age = 21;  //Can't override the value of a constant
or: Assignment to constant variable.
    at <anonymous>:1:5
(anonymous) @ VM3457:1

//Find the sum of two numbers

let firstno = 21;
let secondno = 13;
let sum = firstno + secondno;
console.log("Sum = "+sum);
VM3722:4 Sum = 34
undefined

//Find the area of a circle

const pi = 3.14;
let r = 7;
let A = pi*r*r;
console.log("Area is "+A);
VM4105:1 Area is 153.86


//Find the perimeter of a circle

let C = 2*pi*r;
console.log("Perimeter is "+C);
VM4374:2 Perimeter is 43.96

//getting an input from user

let course = prompt("Enter the course no");
console.log(Uni + " " + course);
VM4852:3 University of Kelaniya csci 12063
