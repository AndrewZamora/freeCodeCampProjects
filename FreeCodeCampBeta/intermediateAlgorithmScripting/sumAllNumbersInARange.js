// Intermediate Algorithm Scripting: Sum All Numbers in a Range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
  //Switch lowest number first
  if (arr[0] > arr[1]) {
    arr.reverse();
  }
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([4, 1]));

// Test Cases:
//   sumAll([1, 4]) should return a number.
//   sumAll([1, 4]) should return 10.
//   sumAll([4, 1]) should return 10.
//   sumAll([5, 10]) should return 45.
//   sumAll([10, 5]) should return 45.