// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    let currentNum= 0;
    let counter = 1;
    let fabNums = [];
    //Get Fibonacci Numbers
    for (let i = 0; i < num; i++) {
        currentNum += counter;
        counter = currentNum-counter;
        fabNums.push(currentNum);
    }
    //Get numbers that are less than num, don't repeat and odd 
    let result =[];
     fabNums.forEach(fabNum=>{
        if(fabNum <= num && !result.includes(fabNum)&& fabNum % 2 !== 0){
            result.push(fabNum);
        }
    })
    //Get the sum
    return result.reduce((a, b) => a + b) + 1;
}

console.log(sumFibs(4000000));

// Test Cases:
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.