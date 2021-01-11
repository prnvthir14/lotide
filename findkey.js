//function findKey

const findKey = function (myObject, callback){

  //function iterates through myObject
  for (x in myObject) {

    //if callback(x) === true; 
    //need to passs something to the call back!!! 
    if (callback(myObject[x])){
      //return key = myObject[x] since we are using for in loop 
      return [x];

    }
  } 
  //If no key is found, then it should return undefined.
  return undefined;
}  


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

//using for in --- x = keys.. we need to pass 

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)) // => "Akleri"

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1)) // => "Blue Hill"

module.exports = findKey;