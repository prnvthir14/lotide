const assertEqual = (actual, expected) => {

  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

//need a function to check if two arrays are a perfect match:
const eqArrays = (array1, array2) => {
  //if arrays are not the same length, they are automatically not a perfect match
  if (array1.length !== array2.length){
    return false;
  }
  //loop through array 1, if at any given index, array1 != array2; retrun false
  for(let i = 0; i < array1.length; i++){
    
    if (array1[i] !== array2[i]){
      return false
    }

  } return true;


} 


// function: eqObjects Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let numberOfKeysObjectOne = Object.keys(object1).length;
  let numberOfKeysObjectTwo = Object.keys(object2).length;

  //return true if object1 and object2 have the same number of keys && value for [key] in object 1 = value for [key] in object2
  
  //if key lengths dont match, return false
  if (numberOfKeysObjectOne !== numberOfKeysObjectTwo){
    
    return false;


  } else if (numberOfKeysObjectOne === numberOfKeysObjectTwo){

    //now if the objects 1 and 2 have the same length, we need to check if the values for a given key in object1[key] === object2[key] 
    //loop through 1 array and check if object1[key] === object2[key]
    
    for (key in object1){
      //if the value at a given key in object1 !== value at same key in object 2, return false 

      if (Array.isArray(object1[key]) && Array.isArray(object1[key])){

        eqArrays(object1[key], object2[key]);

        //if they are not arrays, cary on with regular primitve check
      } else if (object1[key] !== object2[key]){

        return false;

      }

    }

    return true;

  }

};

//primitve test
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false); // => f

// //Handling Arrays
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2),false); // => false

