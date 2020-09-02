// Type conversion
let score = "100";

console.log(score + 1);
// result will be 1001 because JS will concatenate like 2 strings together

score = Number(score) // convert from string to number
console.log(score + 1); // 101

console.log(typeof score);

let result = Number("hello");
console.log(result); // Nan

// from number to a string
let result_01 = String(50);
console.log(result_01, typeof result_01);
// 50 string

// convert to boolean
let result_02 = Boolean(100);
console.log(result_02, typeof result_02);
// true "boolean"
console.log(Boolean(0), typeof Boolean(0));
// false "boolean"

// 100 is a TRUTHY value
// 0 is a FALSY value
// positive and negative numbers are considered truthy values
// 0 is a falsy

let result_03 = Boolean("0");
console.log(result_03, typeof result_03);
// true "boolean"
// strings of any length are TRUTHY but an empty string will be FALSY

