function spinalCase(str) {
  //Find, Combine, and lowercase words
  let newStr = str.match(/[a-z]+|([A-Z])[a-z]+|[^\s-?_](?!-).*(\w+)/g).join('-').toLowerCase();
  return newStr;
}

console.log(spinalCase('The_Andy_Griffith_Show'));

// Test Examples are provided below:
//   spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// Passed
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// Passed
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".