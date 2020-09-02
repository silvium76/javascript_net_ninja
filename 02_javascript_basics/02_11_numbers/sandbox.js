// NUMBERS

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// math operators +, -, *, /, **, %

console.log(10 / 2);

let result = radius % 3; // remainder
console.log(result);

let result_01 = pi * radius ** 2
console.log(result_01);

// order of operation B I D M A S 
/*
B - brackets
I - Indices
D - Division
M - Multiplication
A - Addition
S - Subtraction
*/

let result_02 = 5 * (10 - 3) ** 2;
console.log(result_02); // 245

let likes = 10;
likes = likes + 1;
// or
// likes++
// likes--;
// or likes += 10;
console.log(likes);

// NaN - not a number
console.log(5 / "hello");
console.log(5 * "Hello");

// Concatenate numbers
let result_03 = "the blog has " + likes + " likes";
console.log(result_03);