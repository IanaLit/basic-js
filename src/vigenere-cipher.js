const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(straight) {
   this.straight =  straight === undefined ? true : false;
  }
  encrypt(str, key) {
    if(str === undefined || key === undefined) throw new Error();
    let keyArray =[];  
    keyArray = key.toUpperCase().split('');
    let add = str.length - key.length; 
    while(keyArray.length < str.length){
      keyArray = str.length >= add ?  
      keyArray.concat(keyArray.slice(0, add)) : 
      keyArray.concat(keyArray.slice(0, add - keyArray.length)); 
    }
    str = str.toUpperCase().split('');
    let keyIndex = 0;
    let result =[];

    result= str.map((letter, index) => {
        if(str[index].match(/[A-Z]/)){
        let res = String.fromCharCode(Number(((str[index]?.charCodeAt(0) - 65 + keyArray[keyIndex]?.charCodeAt(0)-65) % 26) + 65));
        keyIndex++;
        return res;
      }
      else {
        return letter;
      }
       
    });
    
    return this.straight ? result.join('') : result.reverse().join('');
  } 
  decrypt(cipher, key) {
    if(cipher=== undefined || key === undefined) throw new  Error();
    let keyArray =[];  
    keyArray = key.toUpperCase().split('');
    let add = cipher.length - key.length; 
    while(keyArray.length < cipher.length){
      keyArray = cipher.length >= add ?  
      keyArray.concat(keyArray.slice(0, add)) : 
      keyArray.concat(keyArray.slice(0, add - keyArray.length)); 
    }
    cipher = cipher.toUpperCase().split('');
    let keyIndex = 0;
    let result =[];
    result = cipher.map((letter, index) => {
      
      if(cipher[index].match(/[A-Z]/)){
        let res = String.fromCharCode(Number(((cipher[index].charCodeAt(0) - 65 + 26 - (keyArray[keyIndex].charCodeAt(0)-65)) % 26) + 65));
        
        keyIndex++;
        return res;
      }
      else {
        
        return letter;
      }
       
    });
    return this.straight ? result.join('') : result.reverse().join('');
     
  }
}

module.exports = VigenereCipheringMachine;
