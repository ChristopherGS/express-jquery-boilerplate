var expect = require('expect.js'); //expect.js
var request = require('request');
var chai = require('chai');
var assert = require('chai').assert; //chai
var foo = 'bar';
  
//__chai tests__  

describe('chai', function() {
	it('should confirm foo is a string with length 3', function() {
 
		assert.typeOf(foo, 'string', 'foo is a string');
  
		assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
	});
});
  
  
  
  
  
//__expect.js tests__

describe('simple', function() {
	it('should return true', function() {
		expect(1).to.be.ok();
	});
});

//Testing asynchronous code with Mocha could not be simpler! 
//Simply invoke the callback when your test is complete. By adding a callback (usually named done) to it() Mocha will know that it should wait for completion.
/*
describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if (err) throw err;
        done();
      });
    })
  })
})
*/

//Pending test-cases are simply those without a callback:
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present');
  });
});


//This test requires the done callback to work correctly
describe('GET home route', function(){
	it('should return a 200 reponse', function(done){
		request.get('http://localhost:5000', function(err, response, body) {
			expect(response).to.exist;
			expect(response.statusCode).to.be(200);
			done();
		});
	});
});