// regular function

const calcArea = function(radius){
    return 3.14 * radius**2;
};

// arrow function
// more modern addition to JS - cleaner

const calcArea_01 = (radius) => {
    return 3.14 * radius**2
};

// when you have only ONE return you can do something like
// const calcArea_01 = (radius) => 3.14 * radius**2;
// or when you have only one paramegter you can remove ()
// const calcArea_01 = radius => "Hello"


const result = calcArea_01(5);
console.log("Area is: ", result);


// practice arrow function
const greet_02 = function(){
    return "Hello world 02.";
};
const result_02 = greet_02();
console.log(result_02);

const greet_03 = () => "Hello world 03";
const result_03 = greet_03();
console.log(result_03);

// another practice of arrow function
const bill = function(products, tax){
    let total = 0;
    for (let i = 0; i < products.length; i ++){
        total += products[i] + products[i]*tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2))

const bill_01 = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i ++){
        total += products[i] + products[i]*tax;
    }
    return total;
};
console.log(bill_01([10, 15, 30], 0.2))