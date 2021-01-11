const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {

  it("returns [] for [[7,8]]", () => {
    assert.deepEqual(middle([[7,8]]), []);
  });

  it("returns [] for [7]", () => {
    assert.deepEqual(middle([[7]]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([[]]), []);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });

  it("returns [9] for [7,8,9,10,11]", () => {
    assert.deepEqual(middle([7,8,9,10,11]),[9]); 
  });

  it("returns [9,10] for [7,8,9,10,11,12]", () => {
    assert.deepEqual(middle([7,8,9,10,11,12]),[9,10]); 
  });


});


// // //check: returns middle element for an array with an odd# of elements
// (middle([]), [9]);

// // //check: returns middle 2 elements for an array with an even# of elements
// assertArraysEqual(middle([7,8,9,10,11,12]), [9,10])


// //takes 2 parameters, actual and expected.
// //parameter 1 = middle[]
// //parameter 2 = the expected answer of calling middle
//assertArraysEqual(middle([7,8,9,10,11]), [9]) // should return true



