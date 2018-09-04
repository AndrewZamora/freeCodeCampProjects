// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  // 1. Split and make both array values lowercase and reorder them
  var sortedArr1 = arr[0].toLowerCase();
  var sortedArr2 = arr[1].toLowerCase();
  // 2. Interate/loop through array check characters that don't match
  // var result = [];
  for (var i = 0; i < sortedArr2.length; i++) {
    //  result.push(sortedArr1.indexOf(sortedArr2[i]));
    console.log(sortedArr1.indexOf(sortedArr2[i]));
    if (sortedArr1.indexOf(sortedArr2[i]) === -1)
      return false;
  }
  return true;
}
// return result.indexOf(-1) == -1;


console.log(mutation(["Mary", "Aarmyz"]));






//Test solutions:

// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.
