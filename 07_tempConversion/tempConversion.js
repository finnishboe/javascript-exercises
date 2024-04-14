const convertToCelsius = function(temp) {
  let grades = (temp-32)*5/9;
  return parseFloat(grades.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let grades = 9/5*temp + 32
  return parseFloat(grades.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
