module.exports = {
	my_calculator: function(operator, value1, value2){
		if(operator=='+'){
			return value1+value2;
		}else if(operator=='-'){
			return value1-value2;
		}else if(operator=='*'){
			return value1*value2;
		}else if(operator=='/'){
			if(value2==0)
				return "You can't devide number by 0";
			return value1/value2;
		}else{
			return "Not supported operator"
		}
	}
}
