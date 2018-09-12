// Intermediate Algorithm Scripting: Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
    let newWord = after;
    //If before is capitalized then make after capitalized
    if (before.charAt(0) == before.charAt(0).toUpperCase()) {
        let cap = after.charAt(0).toUpperCase() + after.substring(1);
        newWord = cap;
    }
    //Cut up str based on index of before
    let oldStr = str.indexOf(before);
    let frontHalf = str.substring(0, oldStr);
    let backHalf = str.substring(oldStr + before.length, str.length);
    //Combine halves and newWord based on after
    return frontHalf + newWord + backHalf;
}

console.log(myReplace("Let us go to the store", "store", "mall"));

// Test Cases:
// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".