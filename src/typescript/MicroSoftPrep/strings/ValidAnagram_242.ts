
function isAnagram1(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    return s.split("").sort().join() === t.split("").sort().join();
};


export function isAnagram(s: string, t: string): boolean {
    const map = new Map<string, number>();
    let flag = true;
    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }

    map.forEach(val => {
        if (val !== 0) {
            return flag = false;
        }
    })
    return flag;
    
};