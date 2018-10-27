// Intermediate Algorithm Scripting: Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
function addTogether(x, y) {
    // Check for number
    function isNum(arg) {
        return typeof arg === "number";
    }
    // Use currying to get extra argument
    if (isNum(x) && arguments.length <= 1) {
        return (z) => {
            if (isNum(z)) return x + z;
        }
    }
    // When currying is not necessary -> get sum
    if (isNum(x) && isNum(y)) return x + y;
}

console.log(addTogether(2, "3"));

// addTogether(2, 3) should return 5.
// addTogether(2)(3) should return 5.
// addTogether("http://bit.ly/IqT6zt") should return undefined.
// addTogether(2, "3") should return undefined.
// addTogether(2)([3]) should return undefined.