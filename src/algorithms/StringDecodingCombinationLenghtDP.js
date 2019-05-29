/**
 * String Decoding 
 * "123" -> "abc" / "lc" / "aw" - total 3 strings
 */

function decodeStringHelper(inputString, len, mem) {
    if (len === 0) {
        return 1;
    }
    let start = inputString.length - len;
    if (inputString[0] === '0') {
        return 0;
    }
    if (mem[len] !== undefined) {
        return mem[len];
    }
    let result = decodeStringHelper(inputString, len - 1, mem);
    if (len >= 2 && parseInt(inputString.substr(start, 2), 10) <= 26) {
        result += decodeStringHelper(inputString, len - 2, mem)
    }
    mem[len] = result;
    return result;
}

function DecodeString(data) {
   let count = decodeStringHelper(data, data.length, []);
   console.log(count);
}

DecodeString("0")
