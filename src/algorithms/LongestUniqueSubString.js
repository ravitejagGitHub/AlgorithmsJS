const longestUniqueSubString = function (inputString) {
    const stringLength = inputString.length;
    let isVisited = [];
    let asciiValue = null;
    let startIndex = currentIndex= 0,  maxLength = 0;
    let i;
    for (i = 0; i <= stringLength - 1; i++) {
        asciiValue = inputString.charCodeAt(i);
        if (isVisited[asciiValue] === undefined) {
            isVisited[asciiValue] = i;
        } else {
            if (isVisited[asciiValue] >= currentIndex) { //LAST REPEATED INDEX IN CURRET SUBSTRING
                if (i - currentIndex > maxLength) { // NEW SUB STRING LENGTH > PREVIOUS SUBSTRING
                    maxLength = i - currentIndex; //UPDATE LENGTH
                    startIndex = currentIndex; //UPDATE START INDEX
                }
                currentIndex = isVisited[asciiValue] + 1; 
           } 
            isVisited[asciiValue] = i;//UPDATE LAST REPEATED INDEX OF CHAR
        }
    }

    if(i-currentIndex > maxLength) {
        maxLength = i-startIndex
        startIndex = currentIndex;
    }
    return inputString.substr(startIndex, maxLength);
}

let substr = longestUniqueSubString("GEEKSFORGEEKS");
console.log(substr);
substr = longestUniqueSubString("ABDEFGABEF");
console.log(substr);
substr = longestUniqueSubString("ABCADAEFGH");
console.log(substr);
substr = longestUniqueSubString("ABCABCDA");
console.log(substr);

substr = longestUniqueSubString("ABCAFDAE");
console.log(substr);

substr = longestUniqueSubString("pwwkew");
console.log(substr);