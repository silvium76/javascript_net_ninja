// can be use single quotes or double quotes
// can be letters, numbers etc in quotes

// strings
console.log("hello world");
let email = "silviu@gmail.com"
console.log(email)

// string concatenation
let firstName = "Silviu";
let lastName = "Marincas";

let fullName = firstName + " " + lastName
console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[3]);

// string length - property
console.log(fullName.length);

// string methods / functions
// methods have parenthesis at the end
// usually the methods do not alter the variable
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf("@")
console.log(index);