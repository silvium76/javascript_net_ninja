const title = document.querySelector("h1");

title.setAttribute("style", "margin: 50px;");
// when we use setAttribute will completely override

console.log(title.style);
console.log(title.style.color);