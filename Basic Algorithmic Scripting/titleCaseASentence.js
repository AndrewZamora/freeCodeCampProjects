// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    // seperate string into an array
    arrayOfStr = str.split(" ");
    // loop through each array item
  for (var i = 0; i < arrayOfStr.length; i++) {
    // capitalize the first letter of each array item
    arrayOfStr[i] = arrayOfStr[i][0].toUpperCase() + arrayOfStr[i].slice(1).toLowerCase();
    // make sure remaining letters of each item are lowercase and add them to the first letter
  }
    // combine the array into a string
  return arrayOfStr.join(" ");
}
console.log(titleCase("i'm a little tea pot"));

//Test Problems:
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".