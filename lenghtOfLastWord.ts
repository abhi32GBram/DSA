//@ts-nocheck

var lengthOfLastWord = function (s) {
    // Initialize a counter variable to keep track of the length of the last word
    let count = 0

    // Iterate over the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        // Check if the current character is not a space
        if (s.charAt(i) != ' ') {
            // If it's not a space, increment the counter
            count++
        } else {
            // If it is a space, check if the counter is greater than 0
            // This means we have encountered at least one non-space character after the last space
            if (count > 0) {
                // If so, return the counter, which represents the length of the last word
                return count
            }
        }
    }
    // If we reach the beginning of the string without finding a space after a non-space character,
    // it means the entire string is one word. So, return the counter.
    return count
};

// Test the function with a sample string
console.log(lengthOfLastWord("Hello World Hiii"))
// ------------------------------------------------------------------------------------------------------------------------

// METHOD #2 :
var lengthOfLastWord_ = function (s) {
    return s.trimEnd().split(' ').pop().length
};

console.log(lengthOfLastWord_("Hello World Hiii"))