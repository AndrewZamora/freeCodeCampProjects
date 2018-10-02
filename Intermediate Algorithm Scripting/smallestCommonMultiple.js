// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    //Sort argument from greatest to least
    const sorted =arr.sort((a,b)=>a - b);
    //Create the range of numbers from argument
    let range = []
    let result="";
    for (let i = sorted[0]; i <= sorted[1]; i++) {
        range.push(i);
    }
    //Make a function that checks for divisible numbers
    function noRemainder(num){
        for (let i = 0; i < range.length; i++) {
            if(num % range[i] !== 0){
                return false;
            }
        }
        return num;
    }
    // Multiply big number
    for (let i = 0; result.length < 1; i++) {
       if(noRemainder(range[range.length-1]*i)) {
         result = noRemainder(range[range.length-1]*i)
       }
    }
    return result
  }

console.log(smallestCommons([23,18]))
// Test Cases:
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.