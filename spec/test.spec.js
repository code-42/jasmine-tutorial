var Calculator = function(){
    return {
        add: function(a,b){
            return a + b;
        },
        subtract: function(a,b){
            return a - b;
        },
        multiply: function(a,b){
            return a * b;
        },
        divide: function(a,b){
            return a / b;
        },
    }
}
describe('calculate addition', function(){
    var calculate = new Calculator();
    
    it('should be able to add two numbers together', function(){
        expect(calculate.add(1,3).toBe(4));
        expect(calculate.add(1,5).toBe(5));
        expect(calculate.add(1,3).toEqual(5));
        expect(calculate.add(1,3).toBeLessThan(2));
        expect(calculate.add(1,3).toBeGreaterThan(5));
        expect(calculate.add(1,3).not.toBeLessThan(5));
        expect(calculate.add(1,3).not.toBeGreaterThan(5));
        console.log('I was able to add two numbers');
    });
    
    it('should be able to declare the calculator class', function(){
        expect(calculate).toBeDefined();
        expect(calculate).not.toBeDefined();
        expect(calculate).not.toBeNull();
    });
    
});

describe('calculate subtraction', function(){
    it('should be able to subtract two numbers', function(){
        expect(calculate.minus(1,3).toBe(5));
        console.log('I was able to add two numbers');
    });
});


// https://jasmine.github.io/2.0/introduction.html

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});