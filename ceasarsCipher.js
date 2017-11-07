// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
  var charNum = [];
  var result = [];
  for (var i = 0; i < str.length; i++) {
      //won't convert any value that aren't A-Z, it will just leave it as is 
    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      charNum.push(str.charCodeAt(i));
      // A-N, Space and characters like "!" are bumped up 13 spaces on ASCII chart	
    } else if (str.charCodeAt(i) < 78) {
      charNum.push(str.charCodeAt(i) + 13);
    } else {
      // N-Z (78-90) are moved down 13 spaces on ASCII chart
      charNum.push(str.charCodeAt(i) - 13);
    }
    result.push(String.fromCharCode(charNum[i]));
  }
  return result.join("");
}

console.log(rot13("SERR PBQR PNZC"));
// Change the inputs below to test
// rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
// rot13("SERR CVMMN!") should decode to "FREE PIZZA!"
// rot13("SERR YBIR?") should decode to "FREE LOVE?"
// rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."