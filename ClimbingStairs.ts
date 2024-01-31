//  @ts-nocheck

// Declare a variable 'climbStairs' which is assigned a function that takes one argument 'n'
var climbStairs = function (n) {

    // Create a new array 'arr' of size 'n+1'
    let arr = new Array(n + 1);

    // Assign 1 to the first element of the array
    arr[1] = 1
    // Assign 2 to the second element of the array
    arr[2] = 2

    // Start a loop from 3 till 'n'
    for (let i = 3; i <= n; i++) {
        // For each iteration, assign the sum of the previous two elements to the current element
        // This is based on the Fibonacci sequence where each number is the sum of the two preceding ones
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    // Return the 'n'th element of the array which represents the 'n'th number in the Fibonacci sequence
    return arr[n]
};

// Log the result of the function 'climbStairs' when '8' is passed as an argument
console.log(climbStairs(8))



// Memoization is a technique used primarily to speed up computer programs by storing the results of expensive function calls and reusing them when the same inputs occur again. 
// This technique is used to optimize programs that perform many repeated computations.
// In the context of your Fibonacci sequence calculation, memoization is used implicitly through the use of an array (`arr`) to store previously calculated Fibonacci numbers. When the function needs to calculate the Fibonacci number for a certain index, it first checks if this number has already been calculated (i.e., if it exists in the array). If it does, the function simply returns the stored value instead of recalculating it.
// This significantly speeds up the computation, especially for large inputs.
// So, while the term "memoization" is not explicitly mentioned in your code, the concept is being applied through the use of the `arr` array to store and reuse previously computed Fibonacci numbers.
