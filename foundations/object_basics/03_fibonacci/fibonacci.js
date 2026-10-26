/* 
filter input for: positive integer
if invalid input, return "OOPS"
create fibonacci upto fibonacci(input)
return that

fib(n) = fib(n - 1) + fib(n - 2)
fib(n) = 
[1, 1, 2, 3, 5, 8, 13]
*/
const fibonacci = function(input) {
    if (!Number.isInteger(input) || input < 0) {
        return "OOPS"
    }
    
    let fib = [0, 1, 1];

    for (let i = 3; i <= input; i++) {
        fib.push(
            fib[i - 1] + fib[i - 2]
        );
    }
    
    return fib[input];
};

// Do not edit below this line
module.exports = fibonacci;
