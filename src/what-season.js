const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
if (date === false || date === undefined) { return 'Unable to determine the time of year!'}
  if (Object.prototype.toString.call(date) === "[object Date]") {
    if (isNaN(date.getTime())) {  
      throw new Error('THROWN');
    } else {  
  const month = date.getMonth();  
  if([2, 3, 4].includes(month))return 'spring';
  else if([5, 6, 7].includes(month))return 'summer';
  else if([8, 9, 10].includes(month))return '/autumn|fall/';
  else if([11, 0, 1].includes(month))return 'winter';
    }
  } else {
    throw new Error('THROWN');
  } 
}

