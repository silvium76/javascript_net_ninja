const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.bbc.co.uk");
link.innerText = "BBC News";

const msg = document.querySelector("p");
console.log(msg.getAttribute("class"));
msg.setAttribute("class", "success");

// set an attribute that doesn't existe yet
// JS will just create it
msg.setAttribute("style", "color: green;");