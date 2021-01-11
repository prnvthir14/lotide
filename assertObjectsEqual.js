const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION

const assertObjectsEqual = (actual, expected) => {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
   
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  }

};

let  object1 = {'a':1}
let  object2 = {'a':1}

// assertObjectsEqual(object1, object2)

module.exports = assertObjectsEqual;

