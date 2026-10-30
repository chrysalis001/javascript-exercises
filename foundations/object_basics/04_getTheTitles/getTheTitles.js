/* 
iterate over the array
    map if key == title then put the value into the new array
*/

const getTheTitles = function(shelf) {
    let titles = shelf.map(book => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
