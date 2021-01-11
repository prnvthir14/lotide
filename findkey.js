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


module.exports = findKey;