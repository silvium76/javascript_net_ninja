// Template strings

const title = "Best reads of 2019";
const author = "Silviu";
const likes = 30;

// concatenation way
let result = "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result);

// template string / template literal way
let result_01 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result_01);

// creating HTML templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);

