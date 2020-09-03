// object literals
// 'this' keyword - is a context object and represents the context in which the current code is executed
// if we use in the global context 'this' will refer to the window object
// depends the context where we will use the keyword 'this'
// arrow function works differently with 'this' keyword
// when we use a normal function as a method and invoked that method JS sets the value of 'this' keyword to the object that the method was used on
// you need to rv this video because of the arrow function explanation
// IN ORDER TO USE 'THIS' INSIDE A METHOD TO REFER TO THE ACTUAL OBJECT THAT THE METHOD IS ON WE NEED TO USE A REGULAR FUNCTION AND NOT AN ARROW FUNCTION

let user = {
    name: "crystal", // one property
    age: 30,
    email: "silviu@gmail.com",
    location: 'berlin',
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],
    // the following line is a method attached to the user object
    // the name of the method is login
    // the bellow functions can be written also as short hand versions
    // login(){}
    // logout(){}
    // logblogs(){}
    login: function(){
        console.log("The user is logged in");
    },
    logout: function(){
        console.log("The user is logged out");
    },
    // in the following method we want to log the blogs property
    logBlogs: function(){
        // console.log(blogs) - will not work
        // console.log(this); - will refer to user object
        console.log(this.blogs);
        console.log("This user has written the following blogs: ");
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

// calling the method
user.login(); // The user is logged in
user.logout(); // The user is logged out

user.logBlogs();
