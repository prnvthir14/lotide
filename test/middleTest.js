const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');
const middle = require('../middle');
// const assertArraysEqual = require ('../assertArraysEqual')

const assertArraysEqual = require('../assertArraysEqual');

// //check: returns nothing when there are 2 or less elements in the array;
// console.log(middle([7,8]));
// console.log(middle([7]));
// console.log(middle([]));


// //check: returns middle element for an array with an odd# of elements
(middle([7,8,9,10,11]), [9]);

// //check: returns middle 2 elements for an array with an even# of elements
// assertArraysEqual(middle([7,8,9,10,11]), [9,10])


// //takes 2 parameters, actual and expected.
// //parameter 1 = middle[]
// //parameter 2 = the expected answer of calling middle
assertArraysEqual(middle([7,8,9,10,11]), [9]) // should return true
