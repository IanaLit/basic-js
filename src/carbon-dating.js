const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity || 
    typeof sampleActivity !== 'string' || 
    parseFloat(sampleActivity) <= 0 || 
    parseFloat(sampleActivity) >= 15 || 
    isNaN(sampleActivity) ||
    !Number.isFinite(parseFloat(sampleActivity))){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(Math.LN2/ HALF_LIFE_PERIOD));
  
};
