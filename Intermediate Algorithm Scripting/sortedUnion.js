// Intermediate Algorithm Scripting: Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//Created default params with = 
function uniteUnique(arr1,arr2=[],arr3=[],arr4=[]) {
    //Combine all arrays 
    let allArr = arr1.concat(arr2,arr3,arr4);
    let result =[];
    //Push all numbers that aren't in result
    allArr.forEach(number => {
        if(result.indexOf(number) === -1){
            result.push(number);
        }
    });
    return result;
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// Test Cases:
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].