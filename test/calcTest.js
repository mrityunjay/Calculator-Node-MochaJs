const assert=require('chai').assert;
const calc=require('../calc').my_calculator;

describe('App', function(){
	it('verify add functionality', function(){
		let result=calc('+',5,5);
		assert.equal(result,10);
	});
	it('verify substract functionality', function(){
		let result=calc('-',5,5);
		assert.equal(result,0);
	});
	it('verify multiply functionality', function(){
		let result=calc('*',5,5);
		assert.equal(result,25);
	});
	it('verify divide functionality', function(){
		let result=calc('/',5,5);
		assert.equal(result,1);
	});
	it('divide number with zero', function(){
		let result=calc('/',5,0);
		assert.equal(result,"You can't devide number by 0");
	});
});
