export function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0, curStrLength;
    let leftIndex = 0;
    let rightIndex = 0;
    const isVisited : { [key: string]: number} = {}
    for ( ; rightIndex < s.length; rightIndex++) {
        let c = s[rightIndex];
        if (isVisited[c] !== undefined && isVisited[c] >= leftIndex) {
            curStrLength = rightIndex - leftIndex;
            if (curStrLength > maxLength) {
                maxLength = curStrLength;
                leftIndex= rightIndex
            }
            leftIndex = isVisited[c] + 1;
        }
        isVisited[c] = rightIndex;
    }
    curStrLength = rightIndex - leftIndex;
    if (curStrLength > maxLength) {
        maxLength = curStrLength;
        leftIndex= rightIndex
    }
    return maxLength;
}
