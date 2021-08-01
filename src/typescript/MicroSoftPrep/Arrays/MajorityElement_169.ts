function majorityElement(nums: number[]): number {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        map.set(n, (map.get(n) || 0) + 1);
        if ( map.get(n) as number >= nums.length / 2) {
            return n;
        }
    }

    return -1;
};