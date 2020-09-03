// object literals
// key - value pair

let user = {
    name: "crystal", // one property
    age: 30,
    email: "silviu@gmail.com",
    location: 'berlin',
    blogs: ["why mac & cheese rules", "10 things to make with marmite"]
};

console.log(user);

// to access a property (. notation and [])
console.log(user.name);

// override one value
user.age = 43;
console.log(user.age);

// to access a property we can also with [] not just with . notation
console.log(user["name"]);

user["name"] = "John";
console.log(user["name"]);

console.log(typeof user);