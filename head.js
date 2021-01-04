const assertEqual = (actual, expected) => {

  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

const head = (array) => {

  //return first element of an array
  return array[0];
  
}; 

console.log(head([], 5));
