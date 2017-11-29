// Return Largest Numbers in Arrays 
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
//make a place for the array to be built
  var largestNum =[];
// loop through the arrays
  for (var i = 0; i < arr.length; i++) {
//find the max number of each array and add to largestNum array
    largestNum.push(Math.max.apply(null, arr[i]));
  }
//return all of the largest numbers in an array
  return largestNum;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
