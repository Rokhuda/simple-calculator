describe('add', function () {
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


describe('multiply', function () {
    it('multiply two numbers, and return 2', function () {
        let result = multiply(1, 2);
        expect(result).toEqual(2);
    });

    it('mutiply multiple numbers, and return result', function () {
    let result = multiply(1, 2, 3, 4);
    expect(result).toEqual(24);
    });
});
