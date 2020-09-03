// get an element by ID - single element
const title = document.getElementById("page-title");
console.log(title);

// get elements by their class name - multiple elements
const errors = document.getElementsByClassName("error");
console.log(errors);
console.log(errors[0]); // we cannot use forEach like in previous lesson

// get elements by their tag
// we will try to grab a referrence to all the p tag in the document
const paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras[1]);

// usually we will
// use document.querySelector() and document.querySelectorAll()