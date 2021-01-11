//The function should take in a sentence (as a string)  
//return a count of each of the letters in that sentence.

// const { builtinModules } = require("module");

const countLetters = function(senentce) {

  let returnObject = {};
  //need to remove spaces from input
  let refinedString = senentce.split(" ").join("")
  console.log(refinedString);

  for (let x of refinedString){
    //check that we loop through the whole sentence: WORKS
    // console.log(senentce[x]);
    //console.log(!returnObject[x])
    // !returnObject[x] - CHECKING IF THE KEY EXISTS OR NOT.
    //Not filtering anything in this example 
    if (!returnObject[x]){
      //if the key does not exist, add the key to your return object and assign it an initial value = 1
      returnObject[x]=1;

    } else {
      //else if the key does exist, increment its value by 1 and we move on to the next element.
      returnObject[x]+=1;

    }
    
  }  
  return returnObject;
}

module.exports = countLetters;