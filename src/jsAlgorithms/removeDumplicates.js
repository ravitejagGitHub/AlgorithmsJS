/**
 Question: How would you remove duplicate members from an array?
*/

const removeDuplicate = function(arr) {
    return Array.from(new Set(arr));
};
module.exports = removeDuplicate;
