// @ts-nocheck


var addBinary = function (a, b) {
    // Initialize a variable named carry to keep track of the carry from each addition operation
    let carry = 0
    // Initialize an empty string named res to store the result of the addition
    let res = ''

    // Iterate over the strings a and b from right to left
    // i and j are the indices of the current characters in a and b respectively
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        // Calculate the sum of the current characters in a and b, plus the carry from the previous operation
        // If a character doesn't exist (because one of the strings is shorter than the other), treat it as 0
        sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry
        // Append the remainder of the sum divided by 2 to the front of the result string
        // This gives us the binary representation of the sum
        res = (sum % 2) + res 
        // Update the carry for the next operation
        // If the sum is greater than 1, there is a carry
        carry = sum > 1 ? 1 : 0
    }

    // After the loop, if there is still a carry, prepend it to the front of the result string
    if (carry) res = '1' + res
    // Return the result string
    return res
};

// Test the function with a sample pair of binary strings
console.log(addBinary("11","1"))
