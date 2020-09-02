// Logical operators - OR || and AND &&
// OR || - at least one of the conditions to be true
// AND && - all the conditions need to be true

const password = "d@dfsdfssss";

if (password.length >= 12 && password.includes("@")){
    console.log("That password is very strong");
} else if (password.length >= 8 || password.includes("@")){
    console.log("That password is strong enough");
} else {
    console.log("Password is not strong enough");
}