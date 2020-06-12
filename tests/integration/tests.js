const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  // Do the number buttons update the display of the running total?
  it('should update the display of the running total', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#number2')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('12')
  })
  // Do the arithmetical operations update,
  // the display with the result of the operation?
  it('should update display with the result of arithmetical operations', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number1')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })
  // Can multiple operations be chained together?
  it('should chain mulitple operations',function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number5')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#operator_add')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('10')
      element(by.css('#clear')).click();
  })
  // Is the output as expected for a range of numbers
  // (for example, positive, negative, decimals and very large numbers)?
  it('should have a negative output',function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-2')
   })

   it('should have a decimal output',function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number5')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('2.5')
    })

    it('should have a large output',function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number2')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('100')
     })

  // What does the code do in exceptional circumstances?
  // Specifically, if you divide by zero, what is the effect?
  // Write a test to describe what you’d prefer to happen,
  // and then correct the code to make that test pass
  //(you will need to modify the Calculator model to meet
  // this requirement).
  it('should chain mulitple operations',function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#clear')).click();
      element(by.css('#number5')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

});
