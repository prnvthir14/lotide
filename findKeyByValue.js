const findKeyByValue = function (myObject,value) {

  //need to use value to return the key

  //initialize empty sting to store key
  let keyOfValue = '';

  //loop through object and at any given index, 
  //need to use for in loop to loop through object
  for (var key in myObject ){
    //check the results of the iteration
    // console.log(`keys: ${key} myObject.keys ${myObject[key]}`)

    if (myObject[key] === value) { 

      keyOfValue = key;

    } else {
      keyOfValue = undefined;
    }

  }

  return keyOfValue;

}

module.exports = findKeyByValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };


// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");




// var planetMoons = {
//   mercury: 0,
//   venus: 0,
//   earth: 1,
//   mars: 2,
//   jupiter: 67,
//   saturn: 62,
//   uranus: 27,
//   neptune: 14
// };






// for (var planet in planetMoons) {
//   var numberOfMoons = planetMoons[planet];
//   console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
// }


