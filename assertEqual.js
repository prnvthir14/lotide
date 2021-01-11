const assertEqual = (actual, expected) => {

  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};


//not calling assertEqual, passing the variable that points to our function
module.export = assertEqual;

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 15);
// assertEqual("Bootcamp", "Bootcamp");

// // /*
// let x = String.fromCodePoint(`U+2705`)
// console.log(x)
