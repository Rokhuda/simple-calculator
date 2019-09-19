function add() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

function multiply() {
    let result = 1;
    console.log(arguments + ' are the arguments')
    for (let j = 0; j < arguments.length; j++) {
        result *= arguments[j];
    }
    return result;
}

console.log(multiply(2, 3))