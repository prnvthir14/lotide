const assertEqual = require('./assertEqual.js');



const head = (array) => {

  //return first element of an array
  let head = array[0];
  return head;

}; 


assertEqual(head([1,2,4,5,6]),1);
