// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  function hasKey(arg) {
    let here = true;
    for (let i = 0; i < sourceKeys.length; i++) {
      if (!arg.hasOwnProperty(sourceKeys[i])) {
        here = false
      }
    }
    return here
  }

  function sameVal(arg) {
    let here;
    for (let i = 0; i < sourceKeys.length; i++) {
      console.log(source[sourceKeys[i]] === arg[[sourceKeys[i]]])
      if (source[sourceKeys[i]] === arg[[sourceKeys[i]]]) {
        here = source[[sourceKeys[i]]] === arg[[sourceKeys[i]]]
      }
      if (source[sourceKeys[i]] === arg[[sourceKeys[i]]] === false) {
        here = false
        break
      }

    }
    return here
  }
  let newCollect = collection.filter(hasKey);
  return newCollect.filter(sameVal)
}

console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }));
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].


// Looks like this can be completed with:
// For Loops
// Array.prototype.filter()
// Object.hasOwnProperty()



//Test Cases: 
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].

// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

// whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []