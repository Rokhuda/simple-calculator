
function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

function multiply(){
    let multiply = 1;
    for(let j = 0; j < arguments.length; j++){
        multiply *= arguments[j];
    }
    return multiply;
}