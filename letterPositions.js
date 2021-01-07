// function: letterPositions 
//which will return all the indices (zero-based positions) in the string where each character is found.

// for the example: "lighthouseinthehouse"
//letters are keys
//values are arrays containing the index position of the character after the spaces and other delimiters have been removed
// returnObject = { l: [0], i: [1,10], g: [2], h: [3,5,13,15], t: [4,12], o: [6,16], u: [7,17], s: [8,18], e: [9,14,19], n: [11]}


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

//alterting the assertEqual function to use the output from eqArrays 
//to assert if two arrays are identical or not 
const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected) === true) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

const letterPositions = function (sentence){

  //create an empty return object

  let returnObject = {}

  let refinedString = sentence.split(" ").join("")
  
  //take all the spaces out of the sentect (characters are ok to count)

  //need to loop through the input sentence
  //using traditional for Loop so that indexes can be accessed

  for (let index = 0; index < refinedString.length; index++){

    //if the key has not been created, creat it and add its index position to its value/
    if (!returnObject[refinedString[index]]){

      returnObject[refinedString[index]] = [index]

    } else {
      //the key exists and now the index position of the next occurence of the key needs to be pushed to the existing value
      
      returnObject[refinedString[index]].push(index)

    }

    //return object consists of keys = letter and values = [index]
    
  }

  return returnObject;

}


console.log(letterPositions('lighthouse in the house'))

assertArraysEqual(letterPositions("hello").e, [1]);


assertArraysEqual(letterPositions("lighthouse").i, [0]);