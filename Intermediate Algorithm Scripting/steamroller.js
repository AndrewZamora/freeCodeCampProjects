// Intermediate Algorithm Scripting: Steamroller

// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    return arr;
  }

 console.log(steamrollArray([1, [2], [3, [[4]]]]));
//Test Cases:
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].