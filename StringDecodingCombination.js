/**
 * String Decoding 
 * "123" -> "abc" / "lc" / "aw" - total 3 strings
 */
var StringCodeMap = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function decodeStringHelper(combString, inputString, sc) {
    if (inputString.length > 0 && inputString[0] !== '0') {
        let singleDigit = inputString.substr(0, 1);//1 digit
        if (isValidCode(singleDigit)) { 
            decodeStringHelper(combString + decodeString(singleDigit), inputString.substr(1), sc);
        }
        let doubleDigit = inputString.substr(0, 2) //2 digits
        if (inputString.length >= 2 && isValidCode(doubleDigit)) {
            decodeStringHelper(combString + decodeString(doubleDigit), inputString.substr(2), sc);
        }
    }
    if (inputString.length === 0) {
        sc.push(combString);
    }
}

const isValidCode = function (s) {
    var code = parseInt(s, 10);
    return s >= 1 && s <= 26;
}

const decodeString = function(code) {
    return StringCodeMap[code];
}

const StringCombination = function(data) {
    let stringCombList = [];
    decodeStringHelper("", data, stringCombList);
    console.log(stringCombList);
}

//StringCombination("11")
//StringCombination("123")
 //StringCombination("1121")
 StringCombination("11211")
// StringCombination("312111")
// StringCombination("3111211")

