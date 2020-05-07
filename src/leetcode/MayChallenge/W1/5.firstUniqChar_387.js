/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const freq=new Array(26).fill(0);
    for(let i=0;i<s.length;i++) {
        freq[s.charCodeAt(i)-97] += 1;
    }

    for(let i=0;i<s.length;i++) {
        if(freq[s.charCodeAt(i)-97] === 1) {
         return i;
        }
    }
 return -1;
};