// Basic Algorithm Scripting: Slice and Splice
// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let arr1Copy = arr1.slice(0,arr1.length);
    let arr2Copy = arr2.slice(0,arr2.length);
    // Copies of Arrays 
    let whereToPut = n; 
    for (let i = 0; i < arr1Copy.length; ++i) {
        arr2Copy.splice(whereToPut,0,arr1Copy[i]);
        // Stops next arr1Copy[i] from being sent to the front
        whereToPut += 1;
    }
  return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
// All elements from the first array should be added to the second array in their original order.
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.