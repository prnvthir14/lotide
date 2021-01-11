//function: without
//returns an array after filtering out unwated items.
//NOT FINISHED - WALK THROUGH LOGIC STEP BY STEP FOR 

const without = (myArray,itemsToRemove) => {
  

  //define empty array
  let myArrayFiltered = [];

  myArrayFiltered = myArray.filter (f => !itemsToRemove.includes(f));

  return myArrayFiltered;


  
}


module.exports = without;

// Tests
// console.log(without([0, 2, 3], [0])) //works
// console.log(without([0, 2, 3], [2])) //works
// console.log(without([0, 2, 3], [3])) //works
// console.log(without([0, 2, 3], [0,2])) //

// console.log(without([0, 2, 3], [2])) 
// console.log(without(["1", "2", "3"], [1, 2, "3"])) 



