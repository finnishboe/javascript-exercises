const sumAll = function(startNum,finishNum) {
    let counter = 0;
    if (Number.isInteger(startNum) && Number.isInteger(finishNum)){
        if (startNum > 0 && finishNum > 0){
            if (startNum > finishNum) {
                for (let i = startNum; i >= finishNum; i--){
                    counter += i;
                }
            } else {
                for (let i = startNum; i <= finishNum; i++){
                    counter += i;
                }
            }
        } else{
            return "ERROR"
        }
    } else {
        return "ERROR"
    }
    return counter
};

// Do not edit below this line
module.exports = sumAll;
