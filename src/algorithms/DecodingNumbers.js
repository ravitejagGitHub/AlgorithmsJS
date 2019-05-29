/**
 * String Decoding 
 * "27" -> "AA""
 * "28" -> "AB""
 */
var StringCodeMap = ['0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var codesCount = StringCodeMap.length - 1;

function decodeNumberHelper(inputString) {
    let inputNum;
    try {
        inputNum = parseInt(inputString, 10);
    } catch (e) {
        console.log("Invalid Input " + inputString + ", Error: " + e);
        return;
    }
    if (inputNum > codesCount) {
        let remainder = inputNum % codesCount;
        let nextValue;
        if (remainder === 0) {
            nextValue = (inputNum / codesCount) - 1;
            remainder = codesCount;
        }
        else {
            nextValue = (inputNum - remainder) / codesCount;
        }
        return decodeNumberHelper(nextValue) + decodeNumber(remainder);

    } else {
        return decodeNumber(inputNum);
    }

}

const decodeNumber = function (code) {
    // return String.fromCharCode('a'.charCodeAt() + code-1); with out dictionary.
    return StringCodeMap[code];
}

const DecodeNumberFun = function (data) {
    let stringCombList = [];
    let output = decodeNumberHelper(data, '');
    console.log(output);
}

//StringCombination("11")
//StringCombination("123")
DecodeNumberFun("01")
 //StringCombination("11211")
// StringCombination("312111")
// StringCombination("3111211")

