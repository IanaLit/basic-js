const CustomError = require("../extensions/custom-error");

const chainMaker = {
  construct(){
    this.link='';
    this.value='';
  },

  getLength() {
    return this.link ? this.link.split('~~').length : 0;
  },

  addLink(value) {
    this.value = String(value);
    if(value !== undefined){
      if(this.getLength() > 0){
        this.link += '~~( ' + this.value + ' )';
      } else  this.link = '( ' + this.value + ' )';
     
  } else this.link.concat('~~( )'); 
  return this;
  },

  removeLink(position) {
    if(typeof position !=='number' 
    || position > this.link.getLength-1 
    || position < 0) {
      this.link='';
      throw new Error("Position must be a number!");
    }
    
    let tmp = this.link.split('~~');
    tmp.splice(position-1, 1);
    this.link = tmp.join('~~');
    return this;
  },

  reverseChain() {
    let tmp = this.link.split('~~');
    tmp.reverse();
    this.link = tmp.join('~~');
    return this;
  },
  
  finishChain() {
    let tmp = this.link;
    this.link ='';
    return tmp;
  }
};

module.exports = chainMaker;
