function singleNumber1(nums: number[]): number {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) === 1) {
            return nums[i];
        }
    }

    return -1;
};

function singleNumber2(nums: number[]): number {
    const set = new Set<number>(nums);
    const numsSum = nums.reduce((a, b) => a + b, 0);
    const setSum = Array.from(set).reduce((a, b) => a + b, 0);

    // 2(a+b+c) = (a+a+b+b+c) = c;
    return 2*setSum - numsSum;
};

function singleNumber(nums: number[]): number {
    return nums.reduce((a, b) => a ^ b);
};