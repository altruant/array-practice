// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------



function onlySunshine(str, i) {
  let output = []
  for (j = 0; j < i; j++) {
    output[j] = str
  }
  return output;
}

console.log(onlySunshine("sunshine", 3));





// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

let input = ["As", "I", "walk", "through", "the", "valley"];

function reverse(arr) {
 const output = arr.reverse();
 return output;
}

console.log(reverse(input))

// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

let arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];

let filterArr = arr.filter(Boolean);

console.log(arr, "->", filterArr)
// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------
function nesting(arr) {
  let obj = {}
  arr.forEach(function(item){
    obj[item[0]] = item[1];
  });
  return obj;
}
console.log(nesting(myArray));


// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

start = [1,2,3,4,5,4,3]

function uniqueArr(arr) {
  uniqueSet = new Set(arr);
  const backSet = [...uniqueSet];
  return backSet;
}

console.log(uniqueArr(start));






// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
let arr1 = [1,2,3,4]
let arr2 = [1,2,3,4] // match(arr1, arr2)
let arr3 = [1,2,3,4,5]
let arr4 = [1,2,3,4] // match(arr3, arr4) should return false
let arr5 = [1,2,3,4]
let arr6 = [1,2,3,4,4] // match(arr5, arr6) should return false
let arr7 = [1,2,3,4]
let arr8 = [1,2,3,5] // match(arr7, arr8) should return true
// ---------------------

// Put your answer below -------------------------
function match(array1, array2){
  if(array1.length !== array2.length) {
    return false
  } else if (array1.sort().every(function(value, index) {return value === array2.sort()[index]})) {
    return true;
  } else {
    return false;
  }
}


console.log(match(arr1, arr2));
console.log(match(arr3, arr4));
console.log(match(arr5, arr6));
console.log(match(arr7, arr8));








// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
