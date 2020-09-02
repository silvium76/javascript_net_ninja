// returning values
// when the function return a value we need to somehow store that value

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
    // instead of the 2 lines above you can 
    // return 3.14 * radius**2;
};

const result = calcArea(5);
console.log(result);

// we can take the result and do something else

// const calcVol = function(result){

// };
// calcVol(result)