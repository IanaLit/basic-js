const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,  options) {
  
  class RepeatString {
   
   constructor(options){
   this.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
   this.addition = (typeof options.addition === "boolean" || options.addition === "null") ? options.addition.toString() : options.addition;
   this.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
   this.separator = options.separator ? options.separator : '+';
   this.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
   this.answer = ""; 
    }
    
   }
 let repeate = function(str, options)
   {
     
     let result = new RepeatString(options);
     for(let i=0; i< result.repeatTimes; i++) {
       result.answer += str;
       if(result.addition || result.addition === null){
         result.answer += result.addition;
         let j = result.additionRepeatTimes;
         while(j !== 1){
           j--;
           result.answer += result.additionSeparator+ result.addition;
         }
       }
       if(i !== result.repeatTimes-1)
       result.answer+=result.separator;
     }
     return result.answer;
   }
 
   return repeate(str, options);
 };
  