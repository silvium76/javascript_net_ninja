// basic concepts
// primitive values
// the point is with primitive types when you change the value the copied value will not change
// with reference values, when you change the value of copied one the value foir everything will change

let scoreOne = 50;
let scoreTwo = scoreOne; // we make like a copy

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

userOne = {name: "silviu", age: 30};
userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40
console.log(userOne, userTwo);