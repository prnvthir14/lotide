const assertEqual = (actual, expected) => {

  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};


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


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!