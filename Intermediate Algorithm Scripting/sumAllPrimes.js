// Intermediate Algorithm Scripting: Sum All Primes
// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num){
    let array = [];
    // Make filter function
    function isPrime (x) {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                return false;
            };
        }
        return x;
    }
    // Create array
    for (let j = 2; j <= num; j++) {
        array.push(j);
    }
    // Check for prime numbers
    let primeNums = array.filter(isPrime);
    // Get the sum
    let result = primeNums.reduce((a,b)=>a+b, 0);
    return result;
}

console.log(sumPrimes(10));
// Test Cases:
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.
