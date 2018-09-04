// Return the remaining elements of an array after chopping off n elements from the head.
//
// The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
//Splice cuts off part of the array and the changes remain
  arr.splice(0,howMany);
//Return what is left of the array
  return arr;
}

console.log(slasher([1, 2, 3], 2));


// slasher([1, 2, 3], 2) should return [3].
// slasher([1, 2, 3], 0) should return [1, 2, 3].
// slasher([1, 2, 3], 9) should return [].
// slasher([1, 2, 3], 4) should return [].
// slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
// slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].

// Refactor!
function slasher(arr, howMany) {
//will cut out a value out of the arry based on it's index number and the original array stays the same 
return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
