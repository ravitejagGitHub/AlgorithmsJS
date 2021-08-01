/**
 Do not return anything, modify nums in-place instead.
 */
function swap(nums: number[], i: number, j: number) {
    let tmp= nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

 function moveZeroes(nums: number[]): void {
    let lastNonZeroIndex = 0;
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, lastNonZeroIndex);
            lastNonZeroIndex++;
        }
    }
};