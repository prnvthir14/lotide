// function: letterPositions 
//which will return all the indices (zero-based positions) in the string where each character is found.

// for the example: "lighthouseinthehouse"
//letters are keys
//values are arrays containing the index position of the character after the spaces and other delimiters have been removed
// returnObject = { l: [0], i: [1,10], g: [2], h: [3,5,13,15], t: [4,12], o: [6,16], u: [7,17], s: [8,18], e: [9,14,19], n: [11]}


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

module.exports = letterPositions;


//tests
// console.log(letterPositions('lighthouse in the house'))

// assertArraysEqual(letterPositions("hello").e, [1]);


// assertArraysEqual(letterPositions("lighthouse").i, [0]);