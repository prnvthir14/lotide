const assertEqual = (actual, expected) => {

  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};


//need a function that takes an array and an object
//the object will contain KV pairs, with values = true or false 
//Only keys which have a truthy value should be counted and returned in the resulting object.
//

const countOnly = (allItems, itemsToCount) =>{

  let returnObject = {};
  //tests
  //array - allItems
  //for off iterates over values
  for (let x of allItems){
  //check we go through all names in FirstName
    //console.log(allItems[x]);
    
    //itemsToCount = (our object that has KV pairs set to truthy/falsey)
    //if the key is assigned to true; we want to log the name
    //BY CHECKING THIS HERE,  ONLY KEYS THAT NEED TO BE INCREMENTED ATLEAST ONCE WILL pass this point!!!
    if (itemsToCount[x]){
      //here we check if the key exisits
      if (!returnObject[x]){  
        //if the key does not exist in our return object, add it with a count = 1
        returnObject[x]=1;

      } else {
        //if the key has already been entered, count ++
        returnObject[x]+=1;

      }
    //check only names associated with a true value get logged here
    // console.log(firstNames[x])      
    }
  }
return returnObject;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);