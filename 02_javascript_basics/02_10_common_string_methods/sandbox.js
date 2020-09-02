// common string methods
// methods are functions that belongs to a specific object or object type

let email = "silviu@gmail.com";

// the position of the last character
let result = email.lastIndexOf("l");

// slice - from where to where - from position 0 to position 10
let result_01 = email.slice(0, 10)

// substr - like slice - from where to how many characters
let result_02 = email.substr(4, 10);

// replace a certain character in a string with another character
// find the first character not all!!
let result_03 = email.replace("m", "w");

let result_04 = email.replace("n", "w");

console.log(result_03);
