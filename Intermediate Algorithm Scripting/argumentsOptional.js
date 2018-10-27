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
