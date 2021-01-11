const takeUntil = function(array, callback) {
  //callback/predicate returns a truthy value

  const retrunArray = [];
  //need to iterate through array till callback = true;
  //iterate through array
  for (let x of array) {
    //we keep iterating till the callback(x) returns true
    if (!callback(x)) {
      //so keep going while !(callbac(x)) and push the element x to return aray
    
      retrunArray.push(x);

    } else if (callback(x)) {
    //if the callback function with parameter (x) returns true
    //stop the function
    
      break;
      
    }

  }
  //The function will return a "slice of the array with elements taken from the beginning.
  return retrunArray;

};

module.exports = takeUntil;

// //tests
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);


// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);