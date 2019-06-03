const swap = function(arr, i, j) {
  arr[i] = arr[i] + arr[j];
  arr[j] = arr[i] - arr[j];
  arr[i] = arr[i] - arr[j];
};

const quickSort = function(arr, startIndex, endIndex) {
  if (endIndex > startIndex) {
    let pivoteIndex = endIndex;
    for (let i = startIndex; i < endIndex; i++) {
      if (arr[i] > arr[pivoteIndex]) {
        swap(arr, i, pivoteIndex);
      }
    }
    quickSort(arr, startIndex, pivoteIndex - 1);
    quickSort(arr, pivoteIndex + 1, endIndex);
  }
};

module.exports = function QuickSort(arr) {
  return quickSort(arr, 0, arr.length);
};
