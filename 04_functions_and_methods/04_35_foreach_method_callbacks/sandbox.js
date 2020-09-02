// This lesson has too many changes so not all the code was written and changed 
// CALLBACK FUNCTIONS ARE JUST NORMAL FUNCTIONS THAT WE PASS INTO ANOTHER FUNCTION OR ANOTHER METHOD AS AN ARGUMENT

let people = ["Silviu", "John", "Doe", "Shaun"];

// forEach is a method that iterates over an array
// forEach will expect as an argument a callback function
people.forEach(function(person){
    console.log(person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

// the next is the arrow function equivalent
people.forEach(logPerson);

