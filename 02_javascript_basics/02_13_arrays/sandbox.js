// Arrays are storing collections - strings, numbers etc

let colors = ["white", "blue", "red"];
console.log(colors);
console.log(colors[1]);

// override position
colors[1] = "brown";
console.log(colors);

let ages = [20, 25, 30, 35];
console.log(ages);
console.log(ages[2]);

let random = ["silviu", "white", 30, 20];
console.log(random);

// property
console.log(colors.length);

// array methods
// put all array elemets together in a string
let result = colors.join(", ")
console.log(result);

cities = ["Rome", "Paris", "Cluj", "Barcelona"]
let result_01 = cities.indexOf("Cluj")
console.log(result_01);

// concatenating an array with another array
let result_02 = colors.concat(["yellow", "grey"])
console.log(result_02);

// push - push any value out an array
// return the length of the new array
// ????
let result_03 = colors.push("brown");
console.log(result_03);

console.log(colors);

// pop method take the last added item
let result_04 = colors.pop()
console.log(result_04);

