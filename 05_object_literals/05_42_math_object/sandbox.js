// Math object

console.log(Math);

// constants
console.log(Math.PI);
console.log(Math.E);

// methods
const area = 7.7;
console.log(Math.round(7.7)); // 8
console.log(Math.floor(7.7)); // 7
console.log(Math.ceil(7.7)); // 8
console.log(Math.trunc(7.7)); // 7 - take away decimal and leave the integer

// generate random numbers
// will generate a decimal number between 0 and 1
const random = Math.random();
console.log(random);

// random number between 1 and 100
console.log(Math.round(random)); // will get 0 or 1 always
// to get a round number between 0 and 100
console.log(Math.round(random * 100));
// to get a round number between 0 and 5
console.log(Math.round(random * 5));