/**
 * Fibonacci Series using Dynamic Programming 
 *  
 * */

 const fibonacci_helper = function(n, FibArray) {
    if(FibArray[n]!==-1)  {
        return FibArray[n];
    } else {
        FibArray[n] = fibonacci_helper(n - 2, FibArray) + fibonacci_helper(n-1, FibArray) 
    }
    return FibArray[n];
 }

 const fibonacci = function(n) {
    let FibArray = [-1,0,1,1];
    if(n>3) {
        FibArray = FibArray.concat(Array(n-3).fill(-1))
    }
    console.log(n + " fibanpcii value : "+ fibonacci_helper(n, FibArray)) 
    console.log(FibArray.slice(1))
 }

 fibonacci(10)