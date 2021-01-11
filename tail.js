const assertEqual = require('./assertEqual.js');

//returns the tail of a given arrat (removes the first element)
const tail = (array) => {
  //initilaizing empty tail array
  let tailArray = [];

  //loop through input array starting with index = 1 and push to tail
  for (let i = 1; i < array.length; i++) {

    tailArray.push(array[i]);
  
  }
  
  //need to return the tail of the array
  return tailArray;
  
};


module.exports = tail;

