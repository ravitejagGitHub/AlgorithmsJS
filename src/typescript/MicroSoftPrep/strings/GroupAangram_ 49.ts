
export function groupAnagrams(strs: string[]): string[][] {
    const map: { [key: string]: string[]} = {}
    for (let i = 0; i < strs.length; i++) {
        let sortStr = strs[i].split("").sort().join("");
        if (map[sortStr]) {
            map[sortStr].push(strs[i]);
        } else {
            map[sortStr] = [strs[i]];
       }
    }
    return Object.values(map);
};
                    