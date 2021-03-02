const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members instanceof Array){
    return members.map(member => {

     if (typeof member === "string") return member.toUpperCase().trim().split('').slice(0, 1);
     
  }).sort().join('');
  }
  else return false;

};
