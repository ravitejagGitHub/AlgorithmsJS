

export function removeDuplicates(nums: number[]): number {
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[index - 1] !== nums[i]) {
            nums[index++] =nums[i]
        }
    }
    return index;
};