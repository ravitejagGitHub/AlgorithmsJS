const swap = function(arr, i, j) {
    if(i!==j) {
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
    }
};

const quickSort = function(arr, startIndex, endIndex) {
  if (endIndex > startIndex) {
    let pivoteIndex = endIndex;
    let partionIndex = startIndex;
    for (let i = startIndex; i < endIndex; i++) {
      if (arr[i] < arr[pivoteIndex]) {
        swap(arr, partionIndex, i);
        partionIndex++;
      }
    }
    swap(arr, partionIndex, pivoteIndex);
    quickSort(arr, startIndex, partionIndex - 1);
    quickSort(arr, partionIndex + 1, endIndex);
  }
};

module.exports = function QuickSort(arr) {
  return quickSort(arr, 0, arr.length - 1);
};
