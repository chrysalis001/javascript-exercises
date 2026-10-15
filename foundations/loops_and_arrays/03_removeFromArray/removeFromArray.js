const removeFromArray = function(original, ...target) {
    let edited;
    edited = original.filter(item => !target.includes(item));
    return edited;
};

// Do not edit below this line
module.exports = removeFromArray;
