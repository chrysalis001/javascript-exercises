/* 
turn into array? string is an array
filter out spacebar, ?, !, ',', '.'
lowercase the new array
reverse the array
check if identical to original
*/

const palindromes = function (palindrome) {
    let check = [...palindrome].filter(letter => 
        letter != '!' &&
        letter != '?' &&
        letter != '.' &&
        letter != ',' &&
        letter != ' ');
        
    return check.join('').toLowerCase() == check.reverse().join('').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
