/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineMap = new Map();
    for(let i=0;i<magazine.length;i++) {
        let c = magazine[i];
        magazineMap.set(c, magazineMap.has(c) ? magazineMap.get(c)+1 : 1)
    }

    let count = 0;
    for(let i=0;i<ransomNote.length;i++) {
        let c = ransomNote[i];
        if(magazineMap.has(c) && magazineMap.get(c)>0) {
            count++;
            magazineMap.set(c, magazineMap.get(c)-1);
        } else {
            break;
        }
    }

    return count === ransomNote.length;

};