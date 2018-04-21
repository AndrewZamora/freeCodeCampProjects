// Roman Numeral Converter
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.
var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
var decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
//1,4,5,9,10,40,50,90,100,400,500,900,1000

function convertToRoman(num) {
    if (decimal.indexOf(num) !== -1) {
        return romanNum[decimal.indexOf(num)]
    }
}

console.log(convertToRoman());

// Test Examples are provided below:
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