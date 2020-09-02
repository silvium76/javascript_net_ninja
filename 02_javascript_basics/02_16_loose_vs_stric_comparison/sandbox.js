let age = 25;

// loose comparison (different types can still be equal)

console.log(age == 25); // true
console.log(age == "25"); // true
// equal even if different types in JS
// becase behind the scenes JS will convert the string into a number before it evaluates it

// strict comparison (different types cannot be equal)
console.log(age === 25); // true
console.log(age === "25"); // false
// in this case JS will not convert becase of ===