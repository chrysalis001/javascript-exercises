const sumAll = function(number1, number2) {
// check for valid input
// identify bigger and smaller number
// create a loop
    // starts from the smaller number, (iterates bigger number - smaller number) times, until bigger number is reached
    // augment array with new index
        // the value of that new index is smaller number + iteration counter
// reduce sum of the created index

// check for valid input
    if (!(Number.isInteger(number1) && number1 > 0 &&
        Number.isInteger(number2) && number2 > 0)) {
        return  'ERROR';
    }

// identify bigger and smaller number
    let big;
    let small;
    if (number1 > number2) {
        big = number1;
        small = number2;
    }
    else {
        big = number2;
        small = number1;
    }

// create the array via loop
    let array = [];
    for (let i = 0; i <= (big - small); i++) {
        array[i] = small + i;
    }

// reduce the array into sum and return
    return array.reduce((sum, current) => sum + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
