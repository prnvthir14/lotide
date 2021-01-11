//2254

//using MAP II

//impement Pythagoreas
//z^2 = x^2 + y^2.


//map takes in a callbackk()




// ,
//   { x: 12, y: 5 },
//   


const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

//normal function dec

// for (let item of input){
//   console.log(item)
// } 


//this basically assumes that parameter "a" in the callback function gets result of each iteration of our input array ||||CHECK THGIS
//cleaned up
const result = input.map( function(a) {  

  let z = Math.sqrt((a.y)**2 + (a.x)**2) 
  return z;
  ;})



console.log(result)  
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);