// change the text in the first p tag
const para = document.querySelector("p");

// innerText is a property not a method - so no ()
console.log(para.innerText);
para.innerText = "another day";
// if you want to append to the text use +=

// change the text of several items at once
const paras_01 = document.querySelectorAll("p");
paras_01.forEach(para_01 => {
    console.log(para_01.innerText);
    para_01.innerText += " new text";
});

// change the HTML
const content = document.querySelector(".content");
console.log(content.innerHTML);
content.innerHTML += "<h2> This is a new h2</>";

// another example
// for example we get an array of people from a database and we want to generate an HTML template
const people = ["silviu", "john", "doe"];

people.forEach(person => {
    content.innerHTML += `<p> ${person}</p>`
})