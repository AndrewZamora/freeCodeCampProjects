// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  //Make arguments into an Array
  var imARealArray = arr.slice.call(arguments);
  //Cut off the values that we will seach for
  var target = imARealArray.slice(1, imARealArray.length);
  //filter out the values we are targeting
  var filtered = imARealArray[0].filter(removeVal);
  //Use the index to set filter
  function removeVal(val) {
    return target.indexOf(val) == -1;
  }
  return filtered;
}
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));


// Test Problems:
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
