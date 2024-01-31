// @ts-nocheck

// METHOD #1 : 

var mySqrt = function (x) {
    // If 'x' is less than or equal to 1, return 'x' because the square root of any number less than or equal to 1 is the number itself
    if (x <= 1) {
        return x
    }
    // Start a loop from 2 till 'x'
    for (let i = 2; i <= x; i++) {
        // Check if the square of 'i' equals 'x', if true then 'i' is the square root of 'x' and return 'i'
        if (i * i === x) {
            return i
        }
        // If the square of 'i' is greater than 'x', it means 'i' is the largest integer whose square is less than 'x'. So, return 'i - 1' which is the floor value of the square root of 'x'
        if (i * i > x) {
            return i - 1
        }
    }
};

// Log the result of the function 'mySqrt' when '-1' is passed as an argument
console.log(mySqrt(-1))


// METHOD #2 :


var mySqrt = function(x) {
    let left = 0;
    let right = x;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        let result = mid * mid;
        if (result > x) {
            right = mid - 1;
        } else if (result < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};