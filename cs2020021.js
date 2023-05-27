let name = "Nicole";

typeof(name);
//'string'

let year = 2023;

typeof(year);
//'number'

console.log("My bot's name is " + name);
// My bot's name is Nicole


console.log("she born in " + year);
// she born in 2023


console.log("she was cretaed in " + year);
// she was cretaed in 2023

//const variable declaration

const age = 22;

age = 21;  //Can't override the value of a constant
// or: Assignment to constant variable.
//     at <anonymous>:1:5
// (anonymous) @ VM3457:1

//Find the sum of two numbers

let firstno = 21;
let secondno = 13;
let sum = firstno + secondno;
console.log("Sum = "+sum);


//Find the area of a circle

const pi = 3.14;
let r = 7;
let A = pi*r*r;
console.log("Area is "+A);



//Find the perimeter of a circle

let C = 2*pi*r;
console.log("Perimeter is "+C);


//getting an input from user

let course = prompt("Enter the course no");
console.log(Uni + " " + course);



console.log(typeof(9)); //number

console.log(typeof('happy')); //string

console.log(typeof(3.7)); //number

console.log(typeof(true)); //boolean

console.log(typeof('9')); //string

console.log(12+43); //55

console.log('12'+'43'); //1243

console.log("University"+"Kelaniya"+2023); //UniversityKelaniya2023

console.log("University "+"Kelaniya "+2023); //University Kelaniya 2023

console.log(6-0.1); //5.9
//remainder
console.log(10%3); //1

let a = 8;
let b = 2;
let remainder = a%b;
let exp = a**b;
console.log(remainder); //0
console.log(exp); //64

let x = prompt("Enter first number"); //getting input from the user
let y = prompt("Enter second number");
let rem = x % y;
let expo = x**y;
console.log("Remainder is "+rem); //Remainder is 1
console.log("Exponentiation is "+expo); //Exponentiation is 7776

//complex arithmetic operations

console.log(1+3*4-2); //11

console.log((1+3)*(4-2)); //8

console.log(1+(3*4)-2); //11

console.log((1+3)*4-2); //14

console.log(1+3*(4-2)); //7