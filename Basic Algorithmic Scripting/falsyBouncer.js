// Falsy Bouncer
// Remove all falsy values from an array.
//
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


// function bouncer(arr) {
//   var filterFalsy = arr.filter(Boolean);
//   return filterFalsy;
// }



function bouncer(arr) {
  return arr.filter(function(v) {
    return !!v;
  });
}
console.log(bouncer([7, "ate", "", false, 9, NaN]));



// function bouncer(arr) {
// var result = arr.filter(returnFalse);
// function returnFalse(val){
//   return val == false;
// }
// console.log(result);
// }
//
// console.log(bouncer([7, "ate", "", false, 9,NaN]));
//



// function bouncer(arr) {
//   function noFalse(e) {
//     return e == false;
//   }
// var allFalse =  arr.filter(noFalse);
// for (var i = 0; i < arr.length; i++) {
//   var result = arr.indexOf(allFalse[i]);
//   console.log(arr.indexOf(allFalse[i]));
// if (result > -1) {
//   arr.splice(result, 1);
// }
// }
// return arr;
// }







// Test problems:
// bouncer([7, "ate", "", false, 9]);
//
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2].
