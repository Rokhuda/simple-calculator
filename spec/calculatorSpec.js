//add

describe('add', function () {
    let answer = new Calculator();
    it('add two numbers, and equal zero', function () {
        let result = add(0, 0);
        expect(result).toEqual(0);
    });

    it('add negative numbers, and equal to -2', function () {
        let result = add(-1, -1);
        expect(result).toEqual(-2);
    });

    it('add two number, and equal 9', function () {
        let result = add(4, 5);
        expect(result).toEqual(9);
    });
    it('add many numbers, and equal to 10', function () {
        let result = add(1, 2, 3, 4);
        expect(result).toEqual(10);
    });

});


// multiply
describe('multiply', function () {
    let answer = new Calculator();
    it('multiply two numbers, and return 2', function () {
        let result = multiply(1, 2);
        expect(result).toEqual(2);
    });

    it('mutiply multiple numbers, and return result', function () {
        let result = multiply(1, 2, 3, 4);
        expect(result).toEqual(24);
    });
});




// calculator class

//Memory Slots

describe("calculator  must remember previous numbers", function () {
    let answer = new Calculator();
    it("should return 3", function () {
        answer.add(1, 2);
        answer.set_slot(1);
        let result = answer.get_slot(1)
        expect(result).toEqual(3);
    })

    it("should return 9", function () {
        answer.add(1, 2);
        answer.set_slot(1);
        let result = answer.add(answer.get_slot(1), 6);
        expect(result).toEqual(9);
    })

    it("should return 12", function () {
        answer.add(1, 2);
        answer.set_slot(1);
        let result = answer.multiply(answer.get_slot(1), 4);
        expect(result).toEqual(12);
    })


});



//last
describe("last returns the result of the last function called", function () {
    let answer = new Calculator();
    it("should return 2", function () {
        answer.multiply(1, 2);
        let result = answer.last();
        expect(result).toEqual(2);
    })

    it("should return 3", function () {
        answer.add(1, 2);
        let result = answer.last();
        expect(result).toEqual(3);
    })

    it("should return 7", function () {
        answer.add(1, 2);
        let result = answer.add(answer.last(), 4);
        expect(result).toEqual(7);
    })
});