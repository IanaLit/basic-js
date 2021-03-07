const CustomError = require("../extensions/custom-error");

module.exports =  function transform(arr) {
let tmp =[]; 

  for (let i=0; i< arr.length; i++){

    if (arr[i] === '--discard-next') continue;
    else if (arr[i-1] === '--discard-next') continue;
    else if(arr[i] === '--discard-prev') continue; 
    else if(arr[i+1] === '--discard-prev') continue;

    else if (arr[i] === '--double-next'){
      if (i === arr.length-1) continue;
      else if(arr[i+1] !== undefined ) tmp.push(arr[i+1]);  
    } 
    else if (arr[i-1] === '--double-next' && arr[i] !== undefined) tmp.push(arr[i]);
    else if( arr[i] === '--double-prev'){
      if(arr[i-2] !== '--discard-next' && arr[i-1] !== undefined) tmp.push(arr[i-1]);
      else continue;
    } else if(arr[i+1] === '-double-prev'){
      if(arr[i-1] !== '--discard-next' && arr[i] !== undefined) tmp.push(arr[i]);
      else continue;
    }
      else tmp.push(arr[i]);
  }
  return tmp;
}