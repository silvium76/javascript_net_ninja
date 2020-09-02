// Booleans represents TRUE and FALSE

console.log(true, false); // true false
console.log(true, false, "true", "false");
//true false "true" "false"

// methods can return booleans
let email = "silviu@gmail.com";
// following method will check if a string is having a certain character - will return a boolean
let result = email.includes("@");
console.log(result); // true

let names = ["silviu", "john", "doe"];
let results_01 = names.includes("john");
console.log(results_01); // true

// comparison operators


let age = 25;
console.log(age == 25); // checking equality - true
console.log(age == 30); // false
console.log(age != 30); // true
console.log("silviu" > "crystal") // true