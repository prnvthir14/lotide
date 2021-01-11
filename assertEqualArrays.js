//need a function to check if two arrays are a perfect match:
const eqArrays = require('./eqArrays');

//alterting the assertEqual function to use the output from eqArrays 
//to assert if two arrays are identical or not 
const assertEqualArrays = (actual, expected) => {

  if (eqArrays(actual, expected) === true) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};


module.exports = assertEqualArrays;

