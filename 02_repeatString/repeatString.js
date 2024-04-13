const repeatString = function(string,number) {
    if(number <0) return "ERROR";
    return string.repeat(number)
};

console.log(repeatString("pula",10));

// Do not edit below this line
module.exports = repeatString;
