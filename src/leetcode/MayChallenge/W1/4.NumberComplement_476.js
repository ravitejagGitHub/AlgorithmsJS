/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt(num.toString(2).split('').map(b => b === '0' ? '1' : '0').join(''), 2);
};


/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) { 
    let mask = 1
    
    while(mask < num) 
        mask = (mask << 1) | 1
    
    return num ^ mask        
}; 