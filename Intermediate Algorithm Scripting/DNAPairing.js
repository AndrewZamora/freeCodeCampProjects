// Intermediate Algorithm Scripting: DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
    let results = [...str];
    //Turn str into an array
    let array = [];
    //Check for matching pair and push
    results.forEach(result => {
        if(result === "A"){
            array.push([result , "T"]);
        }
        if(result === "T"){
            array.push([result , "A"]);
        }
        if(result === "G"){
            array.push([result, "C"]);
        }
        if(result === "C"){
            array.push([result , "G"]);
        }   
    });
    return array
  }

console.log(pairElement("GCG"));


// Test Cases 
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].