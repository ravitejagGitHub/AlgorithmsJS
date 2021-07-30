export function twoSum1(nums: number[], target: number): number[] {
    let firstIndex, lastIndex;

    for (firstIndex = 0; firstIndex < nums.length; firstIndex++) {
        lastIndex = nums.indexOf(target - nums[firstIndex]);
        if ( lastIndex>=0 && lastIndex!==firstIndex) {
            return [firstIndex, lastIndex];
        }
    }
    
    return [-1, -1];
};

export function twoSum(nums: number[], target: number): number[] {
    let index, remainder;
    const map: { [key: number]: number } = {};

    for (index = 0; index < nums.length; index++) {
        remainder = target - nums[index]
        if (map[remainder] !== undefined) {
            return [index, map[remainder]]
        } 
        map[remainder] = index;
    }
    
    return [-1, -1];
};