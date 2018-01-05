// Basic Algorithm Scripting: Reverse a String

// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    //String into array, reverse it, turn back into string
    var newString = str.split('').reverse().join('');
    return newString;
  }
  
  console.log(reverseString("Greetings from Earth"));
  

// Test Cases:
// reverseString("hello") should return a string.
// reverseString("hello") should become "olleh".
// reverseString("Howdy") should become "ydwoH".
// reverseString("Greetings from Earth") should return "htraE morf sgniteerG".