const assertEqual = require('./assertEqual.js');



const head = (array) => {

  //return first element of an array
  if (array.length > 0){

    let head = array[0];
    return head;

  } else {

    return []

  }


}; 


module.exports = head;