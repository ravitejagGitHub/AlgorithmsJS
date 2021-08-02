export function findTheDifference(s: string, t: string): string {
    const map = new Map<string, number>();

    for (let c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    for (let c of t) {
        if (!map.has(c) || map.get(c) === 0) {
            return c;
        } else {
            map.set(c, map.get(c) as number -1)
        }
    }

    return "";
};