// FOR loops
// cycle through data = iteration
// each iteration is one cycle through

// initialize - let i = 0
// condition - i < 5
// final expression - i++

for (let i = 0; i < 5; i++) {
    console.log("In loop: ", i);
}
console.log("Loop finished");


const names = ["silviu", "john", "doe"];
for (let i = 0; i < names.length; i++){
    console.log(i); // 0 1 2
    console.log(names[i]); // silviu john doe
}

for (let i = 0; i < names.length; i++){
    let html = `<div> ${names[i]} <div>`
    console.log(html); // <div> silviu <div> etc
}