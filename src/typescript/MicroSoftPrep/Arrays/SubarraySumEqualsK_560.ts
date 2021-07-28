export function subarraySum(nums: number[], k: number): number {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
        let sum=0;
        for (let end = start; end < nums.length; end++) {
            sum+=nums[end];
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
};

export function subarraySum2(nums: number[], k: number): number {
    let count = 0;
    const sumMap: { [key: number]: number } = {};
    let sum = 0;
    sumMap[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sumMap[sum - k]) {
            count+= sumMap[sum-k];
        }

        sumMap[sum] = (sumMap[sum] || 0) + 1;
    }
    return count;
};