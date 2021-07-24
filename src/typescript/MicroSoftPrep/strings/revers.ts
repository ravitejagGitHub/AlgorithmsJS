export function reversString(str: string): string{
    if (str === "") {
        return str;
    }
    return str[str.length-1] + reversString(str.substring(0,str.length-1))
}

export function reversString2(str: string): string {
    const strArr = str.split("");
    let tmp = "", lastIndex;
    for (let i = 0; i < strArr.length / 2; i++) {
        lastIndex = strArr.length - 1 - i;
        tmp = strArr[i];
        strArr[i] = strArr[lastIndex]
        strArr[lastIndex] = tmp;
    }

    return strArr.join("");
}
