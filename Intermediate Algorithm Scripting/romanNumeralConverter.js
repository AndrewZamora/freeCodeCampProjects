// Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
var sub = ["IV", "IX", "XL", "XC", "CD", "CM"]
//4,9,40,90,400,900
var romanNum = ["I", "V", "X", "L", "C", "D", "M"];
//1,5,10,50,100,500,1000

function convertToRoman(num) {
    var result = [];
    for (var i = 0; i < num; i++) {
        result.push(romanNum[0]);
        console.log(result);
        if (result.length == 4){
            result.splice(0, result.length, sub[num - (i+ 1)]);
        }
    }

    return result.join('');
}

console.log(convertToRoman(5));


// if (i / 4 == 1){
//     result.push(sub[0]);
// }
// if(i / 9 == 1){
//     result.push(romanNum[1]);
// }

//    convertToRoman(2) should return "II".
//     convertToRoman(3) should return "III".
//    convertToRoman(4) should return "IV".
//     convertToRoman(5) should return "V".
//     convertToRoman(9) should return "IX".
//    convertToRoman(12) should return "XII".
//    convertToRoman(16) should return "XVI".
//     convertToRoman(29) should return "XXIX".
//    convertToRoman(44) should return "XLIV".
//    convertToRoman(45) should return "XLV"
//    convertToRoman(68) should return "LXVIII"
//    convertToRoman(83) should return "LXXXIII"
//    convertToRoman(97) should return "XCVII"
//    convertToRoman(99) should return "XCIX"
//    convertToRoman(500) should return "D"
//    convertToRoman(501) should return "DI"
//    convertToRoman(649) should return "DCXLIX"
//    convertToRoman(798) should return "DCCXCVIII"
//    convertToRoman(891) should return "DCCCXCI"
//    convertToRoman(1000) should return "M"
//    convertToRoman(1004) should return "MIV"
//    convertToRoman(1006) should return "MVI"
//    convertToRoman(1023) should return "MXXIII"
//    convertToRoman(2014) should return "MMXIV"
//    convertToRoman(3999) should return "MMMCMXCIX"

// numeral = (num).toString(10).split("").map(Number);
//     if (numeral.length < 2) {
//         for (var i = 0; i < numeral[0]; i++) {
//             result += romanNum[0];
//         }
//         if (result.length == 4) {
//             result = result.slice(0, 1);
//             result += romanNum[1];
//         }
//         if (result.length > 4) {
//             result = romanNum[1];
//             for (var i = 0; i < num - 5; i++) {
//                 result += romanNum[0];
//             }
//         }
//         if (result.length == 5) {
//             result = romanNum[1];
//         }
//     }
//     if (numeral.length == 2) {
//         for (var i = 0; i < numeral[0]; i++) {
//             result += romanNum[2];
//         }
//         for (var i = 0; i < numeral[1]; i++){
//             result += romanNum[0];
//         }
//     }