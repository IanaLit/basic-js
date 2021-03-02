const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  if(!backyard instanceof Array){
    throw new CustomError('Not implemented');
  }
  return backyard.reduce((acc,curr) => {
   return acc + curr.filter(cat => cat ==='^^').length
  }, 0)
  
};
