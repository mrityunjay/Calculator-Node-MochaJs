const assert=require('chai').assert;
const calc=require('../calc').my_calculator;

describe('App', function(){
	it('verify add functionality', function(){
		let result=calc('+',5,5);
		assert.equal(result,10);
	});
	it('verify add functionality with max save integer', function(){
		let result=calc('+',Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);
		assert.equal(result,18014398509481982);
	});
	it('verify negative number addition', function(){
		assert.equal(calc('+',10,-20),-10);
	});
	it('verify substract functionality', function(){
		let result=calc('-',5,5);
		assert.equal(result,0);
	});
	it('verify substraction with negative number', function(){
		assert.equal(calc('-', -4, -3),-1);
	});
	it('verify multiply functionality', function(){
		let result=calc('*',5,5);
		assert.equal(result,25);
	});
	it('verify multiply functionality with 0', function(){
		let result=calc('*',5,0);
		assert.equal(result,0);
	});
	it('verify multiply functionality using MAX_SAFE_INTEGER', function(){
		let result=calc('*',Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);
		assert.equal(result,8.112963841460666e+31);
	});
	it('verify divide functionality', function(){
		let result=calc('/',5,5);
		assert.equal(result,1);
	});
	it('divide number with zero', function(){
		let result=calc('/',5,0);
		assert.equal(result,"You can't devide number by 0");
	});
	it('test addition with non number data', function(){
		let result=calc('+',"5","6");
		assert.equal(result, "Operation Not possible with other than number");
	});

});
