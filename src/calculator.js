//add
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

//multiply
function multiply() {
    let multiply = 1;
    for (let j = 0; j < arguments.length; j++) {
        multiply *= arguments[j];
    }
    return multiply;
}


// calculator class

class Calculator {
    constructor() {
        this.lastNum = 0;
        this.slot = [];
    }
    //add numbers
    add() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        this.lastNum = sum;
        return sum;
    }


    //muiltiply numbers
    multiply() {
        let product = 1;
        for (let i = 0; i < arguments.length; i++) {
            product *= arguments[i];
        }
        this.lastNum = product;
        return product;
    }

    //return last
    last() {
        return this.lastNum;
    }

    set_slot(number) {
        this.slot[number] = this.lastNum;
    }

    get_slot(number) {
        return this.slot[number];
    }
};