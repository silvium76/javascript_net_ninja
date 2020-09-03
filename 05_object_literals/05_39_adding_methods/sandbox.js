// object literals
// adding methods the same with key - value pair

let user = {
    name: "crystal", // one property
    age: 30,
    email: "silviu@gmail.com",
    location: 'berlin',
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],
    // the following line is a method attached to the user object
    // the name of the method is login
    login: function(){
        console.log("The user is logged in");
    },
    logout: function(){
        console.log("The user is logged out");
    }
};

// calling the method
user.login(); // The user is logged in

user.logout(); // The user is logged out

