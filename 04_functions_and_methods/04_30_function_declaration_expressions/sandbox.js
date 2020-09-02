// function declaration
// functions should be declared before all the JS
// JS hoist above all the codfe the functions anyway, only the function declaration not the function expression

function greet(){
    console.log("Hello there");
}

greet(); // calling or invoking the function

// function expression - stored inside a variable
// on the following line the function doesn't have a name because it was declared as a variable
// also, because it's an expression will have ; at the end, not like the above function
const speak = function(){
    console.log("Good day.");
};
speak();