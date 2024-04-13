const removeFromArray = function(numList, ...theArgs) {
    newNumList = [];
    return numList.filter(val => !theArgs.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
