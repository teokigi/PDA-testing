var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
    beforeEach(function () {
        calculator = new Calculator()
    });

  // write unit tests here in the form of "it should do something..."
    it('it has a sample test', function(){
    assert.equal(true, true)
    })
  // calculator.add() - add 1 to 4 and get 5
    it('it can add 1 to 4 and get 5', function(){
        calculator.previousTotal=1;
        calculator.add(4);
      assert.equal(5,calculator.runningTotal)
    })
// calculator.subtract() subtract 4 from 7 and get 3
    it('it can subtract 4 from 7 to get 3', function(){
        calculator.previousTotal=7;
        calculator.subtract(4);
     assert.equal(3,calculator.runningTotal)
    })
// calculator.multiply() - multiply 3 by 5 and get 15
    it('it can multiply 3 by 5 to get 15', function(){
        calculator.previousTotal=3;
        calculator.multiply(5);
        assert.equal(15,calculator.runningTotal)
    })
// calculator.divide() - divide 21 by 7 and get 3
    it('it can divide 21 by 7 to get 3', function(){
        calculator.previousTotal=21;
        calculator.divide(7);
        assert.equal(3,calculator.runningTotal)
    })
//calculator.numberClick() - concatenate multiple number button clicks
    it('it can concat multiple number of button clicks', function(){
        calculator.numberClick(1);
        calculator.numberClick(5);
        assert.equal(15,calculator.runningTotal)
    })
// calculator.operatorClick() - chain multiple operations together
    it('it can chain multiple operations together', function(){
        calculator.previousTotal = 5;
        calculator.previousOperator = '+';
        calculator.operatorClick('+');
        assert.equal(5,calculator.runningTotal)
    })
// calculator.clearClick() - clear the running total without affecting the calculation
    it('it can clear the running total without affecting calculation', function(){
        calculator.previousTotal=5;
        calculator.previousOperator='+';
        calculator.runningTotal=10;
        calculator.clearClick();
        assert.equal('+',calculator.previousOperator)
        assert.equal(5,calculator.previousTotal)

    })

});
