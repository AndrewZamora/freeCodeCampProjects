// Basic Algorithm Scripting: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    //Converts string to array
    var splitString = str.split(' ');
    var longestWord = 0;
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i].length > longestWord){
            longestWord = splitString[i].length;
        }
    }
    return longestWord;
}
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));


// Test Cases:
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWordLength("May the force be with you") should return 5.
// findLongestWordLength("Google do a barrel roll") should return 6.
// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.