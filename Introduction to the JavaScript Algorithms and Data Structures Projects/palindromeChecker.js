function palindrome(str) {
    // Take out all puncuation from string (the "g" means global and I had to add a space in the square brackets to remove spaces from string)
    var byePunc = str.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // remove uppercase letters from string
    var byeUpper = byePunc.toLowerCase();
    // splits up the string (not sure if I have to do this), reverses it and joins the string back together
    var reversedString = byeUpper.split('').reverse().join('');
    // checks if the string is a palindrome and returns boolean
    if (reversedString == byeUpper) {
      return true;
    } else {
      return false;
    }
  }
console.log( palindrome("ey-e*"));