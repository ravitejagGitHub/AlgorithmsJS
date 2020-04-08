
var maxSubArray = function(nums) {
    return maxSubArraySum(nums,0,nums.length-1);
};
var maxCrossingSum = function(nums, l, m,  h) 
{ 
    var sum = 0; 
     
    var rsum = Number.MIN_SAFE_INTEGER; 
    var lsum = Number.MIN_SAFE_INTEGER; 
    for (var i = m + 1; i <= h; i++) 
    { 
        sum = sum + nums[i]; 
        if (sum > rsum) 
        rsum = sum; 
    }
     
    sum = 0; 
   
     
    for (var i = m; i >= l; i--) 
    { 
        sum = sum + nums[i]; 
        if (sum > lsum) 
        lsum = sum; 
    } 
     return lsum + rsum;
};

var maxSubArraySum = function(nums, l, h)
{ 
    if (l >= h) {
        return nums[l];
    }

    var m = Math.floor((l + h)/2); 
    return Math.max(Math.max(maxSubArraySum(nums, l, m), 
                    maxSubArraySum(nums, m+1, h)), 
                    maxCrossingSum(nums, l, m, h)); 
};

