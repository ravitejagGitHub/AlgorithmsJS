const swap = function (a, i, j) {
    a[i] = a[i] + a[j];
    a[j] = a[i] - a[j];
    a[i] = a[i] - a[j];
}

const sort012 = function (arr) {
    let low = mid = 0;
    let high = arr.length - 1;
    
    while(mid <= high) {
        switch(arr[mid]) {
            case 0:
                swap(arr, low++, mid++);
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(arr, mid, high--);
                break;
        }
    }
}

let arr = [0,1,2,1,1,2,2,0,1,2,1,2,0];
sort012(arr);
console.log(arr);