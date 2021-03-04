const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
   
  calculateDepth(arr) { 
    let maxDepth = 0; 
    if ( typeof arr === 'object' ) {
      for ( let el in arr ) { 
        let depth = this.calculateDepth( arr[el] ); 
        if ( depth > maxDepth ) maxDepth = depth; 
      } 
      return maxDepth + 1; 
    } else return 0;
  } 
  
};