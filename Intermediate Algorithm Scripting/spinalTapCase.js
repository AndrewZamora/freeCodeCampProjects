function spinalCase(str) {
    let newStr = str.toLowerCase();
    let res = newStr.replace(/\s|_/g,"-");

    return res;
  }
  
  console.log(spinalCase('The_Andy_Griffith_Show'));

//   spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// Passed
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// Passed
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".