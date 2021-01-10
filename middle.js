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
////WHY DO WE NEED EQ ARRAYS (ABOVE) as a part of this?
const assertEqualArrays = (actual, expected) => {

  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);


  }

};
 

//function: middle: to return the middle elements of an array

const middle = function (myArray) {

  //need to return the middle 2 elements of an even array
  //need to return the single middle element of an odd array
  //need to return an empty array if there are 2 or less elements in in
  
  //declare length of 
  let myArrayLength = myArray.length;

  //declare empty array to push middle elements to
  let middleElements = [];

  if (myArrayLength <= 2) {
    
    return middleElements;

    //else if array is odd
  } else if (myArrayLength % 2 === 1){

    //push middle elements to middleElements
    //middle element = Math.floor(length/2) 

    middleElements.push(myArray[(Math.floor(myArrayLength/2))]);
    return middleElements;
    
    //else if array is odd
  } else if (myArrayLength % 2 === 0){

    //gets middle element #1
    middleElements.push(myArray[((myArrayLength/2)-1)]);

    //gets middle element #2
    middleElements.push(myArray[(myArrayLength/2)]);

    return middleElements;

  }

}

// //check: returns nothing when there are 2 or less elements in the array;
// console.log(middle([7,8]));
// console.log(middle([7]));
// console.log(middle([]));


// //check: returns middle element for an array with an odd# of elements
 console.log(middle([7,8,9,10,11]));

// //check: returns middle 2 elements for an array with an even# of elements
console.log(middle([7,8,9,10,11,12]));

// //takes 2 parameters, actual and expected.
// //parameter 1 = middle[]
// //parameter 2 = the expected answer of calling middle
assertEqualArrays(middle([7,8,9,10,11]), [9]) // should return true







