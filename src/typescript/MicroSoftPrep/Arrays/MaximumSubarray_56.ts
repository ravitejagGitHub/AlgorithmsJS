
export function maxSubArray(nums: number[]): number {
    let sum: number  = 0;
    let maxSum:number = nums[0];

    nums.forEach(n=> {
        sum = Math.max(sum+n, n);
        maxSum = Math.max(sum, maxSum)
    })
    return maxSum; 

};