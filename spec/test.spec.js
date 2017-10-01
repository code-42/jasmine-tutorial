class Calculator{
    add(a,b){
        return a + b;
    } 
    minus(a,b){
        return a - b;
    }
}

describe('calculate addition', function(){
    var calculate = new Calculator();
    
    it('should be able to add two numbers together', function(){
        expect(calculate.add(1,3).toBe(5));
        console.log('I was able to add two numbers');
    });
});

    describe('calculate subtraction', function(){
        it('should be able to subtract two numbers', function(){
            expect(calculate.minus(1,3).toBe(5));
            console.log('I was able to add two numbers');
        });
    });



