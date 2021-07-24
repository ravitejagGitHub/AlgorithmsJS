
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    return s.split("").sort().join() === t.split("").sort().join();;

};

function isAnagram2(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const countMap :{ [key:string]: number} = {};
    
    for (let i = 0; i < s.length; i++) {
        countMap[s[i]] = (countMap[s[i]] || 0) + 1;
        countMap[t[i]] = (countMap[t[i]]|| 0 ) - 1;
    }
    const mapArr = Object.values(countMap);
    for (let val of mapArr) {
        if (val !== 0) {
            return false;
        }
    }
    return true;

};
