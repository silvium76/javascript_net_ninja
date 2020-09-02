// get a reference to the "ul"

const ul = document.querySelector(".people");

const people = ["silviu", "john", "doe", "shaun"];

let html = ``; // backticks

people.forEach(function(person){
    // create html template
    html += `<li style="color: purple"> ${person} </li>`
});

// same function as an arrow function

people.forEach(person =>{
    // create html template
    html += `<li style="color: purple"> ${person} </li>`
});

console.log(html);
ul.innerHTML = html;