// Define a function named isPalindrome that takes one parameter: x
var isPalindrome = function (x) {
    // If x is less than 0, return false because negative numbers cannot be palindromes
    if (x < 0) {
        return false
    }
    // Copy the value of x to a new variable my_x
    let my_x = x
    // Initialize a variable reversed to 0
    let reversed = 0

    // While my_x is not equal to 0
    while (my_x !== 0) {
        // Reverse the digits of my_x and store the result in reversed
        reversed = reversed * 10 + my_x % 10
        // Remove the last digit from my_x
        my_x = Math.floor(my_x / 10)
    }

    // If reversed is equal to x, return true because x is a palindrome
    if (reversed === x) {
        return true
    } else {
        // If reversed is not equal to x, return false because x is not a palindrome
        return false
    }
};