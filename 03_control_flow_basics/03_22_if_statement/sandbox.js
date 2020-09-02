// IF statement

const age = 25;
if (age > 20){
    console.log("You are over 20 years old");
}


const names = ["silviu", "john", "doe", "janet"]
if (names.length > 3){
    console.log("Many names.")
}


const password = "pass";

if (password.length >= 12){
    console.log("That password is very strong");
} else if (password.length >= 8){
    console.log("That password is long enough");
} else {
    console.log("Password is not long enough");
}