var sortString = function(str) {
    return str.split("").sort().join("");
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = {};
    
    strs.map((str)=>{
        let key = sortString(str);
        if(result.hasOwnProperty(key)) {
            result[key].push(str);
        } else {
            result[key] = [str];
        }
    });
    return Object.values(result);
};