// object literals
// objects in arrays
// instead of an array in blogs we will store objects

// example how to store objects in an array
// const blogs = [
//     {title: "why mac & cheese rules", likes: 30},
//     {title: "10 things to make with marmite", likes: 50}
// ];
// console.log(blogs, typeof blogs)

let user = {
    name: "crystal", // one property
    age: 30,
    email: "silviu@gmail.com",
    location: 'berlin',
    blogs: [
        {title: "why mac & cheese rules", likes: 30},
        {title: "10 things to make with marmite", likes: 50}
    ],

    login(){
        console.log("The user is logged in");
    },
    logout(){
        console.log("The user is logged out");
    },
    // in the following method we want to log the blogs property
    logBlogs(){
        // console.log(blogs) - will not work
        // console.log(this); - will refer to user object
        console.log(this.blogs);
        console.log("This user has written the following blogs: ");
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

// calling the method
user.login(); // The user is logged in
user.logout(); // The user is logged out

user.logBlogs();
