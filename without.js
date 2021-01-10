// WILL NEED TO INTEGRATE FROM ABOVE
//alterting the assertEqual function to use the output from eqArrays 
//to assert if two arrays are identical or not 
const assertEqualArrays = (actual, expected) => {

  if (eqArrays(actual, expected) === true) {
   
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


//function: without
//returns an array after filtering out unwated items.
//NOT FINISHED - WALK THROUGH LOGIC STEP BY STEP FOR 

const without = (myArray,itemsToRemove) => {
  

  //define empty array
  let myArrayFiltered = [];

  myArrayFiltered = myArray.filter (f => !itemsToRemove.includes(f));

  return myArrayFiltered;


  
}

console.log(without([0, 2, 3], [0])) //works
console.log(without([0, 2, 3], [2])) //works
console.log(without([0, 2, 3], [3])) //works
console.log(without([0, 2, 3], [0,2])) //

console.log(without([0, 2, 3], [2])) 
console.log(without(["1", "2", "3"], [1, 2, "3"])) 



