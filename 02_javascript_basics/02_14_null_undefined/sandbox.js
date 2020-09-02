// NULL - intentional lack of value
// UNDEFINED - not intentional
// We used for example null type when someone is resetting a submit form, we want the title to be null again

let age;

console.log(age, age + 3, `the age is ${age}`);
//undefined NaN "the age is undefined"

let age_01 = null;
console.log(age_01, age_01 + 3, `the age is ${age_01}`);
// null 3 "the age is null"
