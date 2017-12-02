// Confirm the Ending

// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  //Gets the target word's length
  var targetLength = target.length;
  //Selects characters off the end of the string based on the target word's length
  var findTarget = str.substr(str.length - (targetLength));
  //Compares what was found at the end of the string to the target word and returns true if they are the same
  if (findTarget === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");

//This is a better way to write the same thing:

// function confirmEnding(str, target) {
//   return str.substr(-target.length) === target;
// }
//
// confirmEnding("Bastian", "n");
