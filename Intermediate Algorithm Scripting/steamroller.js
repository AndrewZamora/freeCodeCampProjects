// Intermediate Algorithm Scripting: Steamroller

// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
    let flatArr = [];
    const flatten = (item) => {
        //Check for array
        if (!Array.isArray(item)) {
            flatArr.push(item);
        } else {
            //Call function until there are no arrays
            for (let i = 0; i < item.length; i++) {
                flatten(item[i]);
            }
        }

    }
    arr.forEach(flatten);
    return flatArr
    //I found a pretty solution on MDN
    // return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
    //I will have to look into reduce and concat soon
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));
//Test Cases:
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].