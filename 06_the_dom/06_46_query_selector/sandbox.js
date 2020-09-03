const para = document.querySelector("p");
// it grabs ONLY the first p tag 

console.log(para);

const para_02 = document.querySelector(".error");
console.log(para_02);

const para_03 = document.querySelector("div.error");
console.log(para_03);

const para_04 = document.querySelector("body > h1");
console.log(para_04);

// if we want to grab multiple elements
// next line will collect all the p tags
const paras = document.querySelectorAll("p")
console.log(paras); // we will get a node list not an array
console.log(paras[0]);

// We can use forEach like an array
paras.forEach(para_05 => {
    console.log(para_05);
})

// another example
const errors = document.querySelectorAll(".error")
console.log(errors);