export function firstUniqChar(s: string): number {
    const map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        map.set(c, (<number> map.get(c) ||  0 ) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (map.get(c) === 1) {
            return i;
        }
    }
    return -1;
};