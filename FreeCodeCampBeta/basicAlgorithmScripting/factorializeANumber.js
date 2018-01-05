// Basic Algorithm Scripting: Factorialize a Number

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    var factorializedNum = 1;
    for (var i = 1; i <= num; i++) {
        if (num < 1) {
            return 1;
        } else {
            factorializedNum *= i;
        }
    }
    return factorializedNum;
}
console.log(factorialize(0));


// Test Cases: 
// factorialize(5) should return a number.
// factorialize(5) should return 120.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.
// factorialize(0) should return 1.