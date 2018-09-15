// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    //Convert to array
    let array = [...str];
    //Store ASCII Character
    let charNum = array[0].charCodeAt(0);
    let result;
    //Find the character after the missing character 
    array.forEach((letter)=> {
        if(letter.charCodeAt(0)- charNum > 1){
            result = String.fromCharCode(letter.charCodeAt(0)-1);
        }
        charNum = letter.charCodeAt(0);
    })
    return result
}

console.log(fearNotLetter("abce"));

// Test Cases
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.