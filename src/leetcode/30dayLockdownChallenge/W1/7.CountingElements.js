

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]+1)!=-1){
            count++;
        }
    }
    return count;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let count = 0;
    let set = new Set(arr);
    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i]+1)){
            count++;
        }
    }
    return count;
};