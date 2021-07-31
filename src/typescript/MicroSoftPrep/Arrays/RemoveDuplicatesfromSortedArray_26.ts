

export function removeDuplicates(nums: number[]): number {
    let index = 0;
    for(let i = 1; i<nums.length; i++) {
        if(nums[index]!== nums[i]) {
            nums[++index] = nums[i]
        }
    }
    return index;
};

export function removeDuplicates2(nums: number[]): number {
    let i;
    const uniqueArray = Array.from(new Set(nums));
    for(i = 0; i< uniqueArray.length; i++) {
        nums[i]= uniqueArray[i];
    }
    return i;
};