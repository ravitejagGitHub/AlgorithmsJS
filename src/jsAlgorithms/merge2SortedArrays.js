/**
Question: How would you merge two sorted array?

Answer: I will keep a pointer for each array 

*/

const mergeSortedArray = function(arr1, arr2) {
  let i = 0,
    j = 0,
    merged = [],
    k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged[k++] = arr1[i++];
    } else {
      merged[k++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    merged[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    merged[k++] = arr2[j++];
  }

  return merged;
};
module.exports = mergeSortedArray;
