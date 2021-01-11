//defining a map function
//function takes 2 parameters (arrayToMap, callback)

//return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];


const map = (arrayToMap, callback) => {

  const results = [];

  for (let item of arrayToMap){

    //console.log('item BEFORE: ', item);
    
    results.push(callback(item));
    
    
    //console.log('---');

  }

  return results;

}

module.exports = map;
