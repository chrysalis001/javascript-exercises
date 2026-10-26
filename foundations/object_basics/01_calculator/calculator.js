const add = function(a, b) {
	return a + b;
};

// subtract(): take two numbers and return the result after subtracting the second from the first
const subtract = function(a, b) {
	return a - b;
};

// sum(): take an array of numbers and add all the numbers together
const sum = function(array) {
	return array.reduce((sum, number) => sum + number, 0);
};

// multiply(): take an array of numbers and multiply all the numbers together
const multiply = function(array) {
  return array.reduce((sum, number) => sum * number, 1);
};

// power(): take two numbers (base and exponent) and return the result of raising the base to that exponent
const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
  return number	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
