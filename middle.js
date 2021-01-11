

//function: middle: to return the middle elements of an array

const middle = function (myArray) {

  //need to return the middle 2 elements of an even array
  //need to return the single middle element of an odd array
  //need to return an empty array if there are 2 or less elements in in
  
  //declare length of 
  let myArrayLength = myArray.length;

  //declare empty array to push middle elements to
  let middleElements = [];

  if (myArrayLength <= 2) {
    
    return middleElements;

    //else if array is odd
  } else if (myArrayLength % 2 === 1){

    //push middle elements to middleElements
    //middle element = Math.floor(length/2) 

    middleElements.push(myArray[(Math.floor(myArrayLength/2))]);
    return middleElements;
    
    //else if array is odd
  } else if (myArrayLength % 2 === 0){

    //gets middle element #1
    middleElements.push(myArray[((myArrayLength/2)-1)]);

    //gets middle element #2
    middleElements.push(myArray[(myArrayLength/2)]);

    return middleElements;

  }

}

module.exports = middle;






