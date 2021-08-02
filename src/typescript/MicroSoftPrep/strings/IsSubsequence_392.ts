function isSubsequence2(s: string, t: string): boolean {
    let prevIndex = -1;
    for (let c of s) {
        let findIndex =  t.substr(prevIndex + 1).indexOf(c);
        if ( findIndex < 0 ) {
            return false;
        } else {
            prevIndex += findIndex+1;
        }
    }

    return true;
};

export function isSubsequence(s: string, t: string): boolean {
    const map = new Map<string, number[]>();
    
    for (let i = 0; i < t.length; i++) {
        let c= t[i]
        if (map.has(c)) {
            (map.get(c) as number[]).push(i)
        } else {
            map.set(c, [i])
        }
    }

    let low = -1;
    for (let i = 0; i < s.length; i++) {
        let c= s[i]
        if (map.has(c)) {
            let arr = map.get(c);
            let foundIndex = arr?.find(a => a > low) as number;
            if (foundIndex>=0) {
                low = foundIndex;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};