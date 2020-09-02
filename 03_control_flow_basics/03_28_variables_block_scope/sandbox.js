// variables and block scope
// we are allowed to redefined a variable inside a block
// if you define a variable inside a block is not valid outside

let age = 30

if (true){
    let age = 40
    let name = "Silviu"
    console.log(`Inside code block: `, age, name); // 40 Silviu

    if (true){
        console.log(`Inside 2nd code block: `, age); // 40
    }
}

console.log(`Outside code block: `, age); // 30