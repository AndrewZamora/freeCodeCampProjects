// Intermediate Algorithm Scripting: Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
    //Binary to ASCII
    const toASCII = (arg) => {
        //change to array
        const array = arg.split('');
        //flip array->string to num->multiply two to the power of index
        const newArray = array.reverse().map((num, i) =>
            (parseInt(num, 10)) * (Math.pow(2, i))
        );
        //Sum equal ASCII number
        return newArray.reduce((a, b) => a + b, 0);
    }
    //Make chunks of binary->pass to function
    const asciiNums = str.split(' ').map(binary => toASCII(binary));
    //ASCII to letters
    return asciiNums.map(num =>
        String.fromCharCode(num)).join('');

}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// Test Cases:
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"