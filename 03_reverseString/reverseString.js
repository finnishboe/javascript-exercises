const reverseString = function(string) {
    new_string = ""
    for (let i = string.length-1; i>= 0; i--){
        new_string += string[i];
    }
    return new_string
};

// Do not edit below this line
module.exports = reverseString;
