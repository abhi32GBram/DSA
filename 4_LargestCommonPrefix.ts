// Function to find the longest common prefix among all strings in an array
var longestCommonPrefix = function (strs) {
    // Array to store the common prefixes
    const commonPre: string[] = []
    // IN JS THIS JUST WOULD BE - const commonPre = []

    // Sort the array of strings
    strs.sort()
    // Get the first and last words in the sorted array
    const firstWord = strs[0]
    const lastWord = strs[strs.length - 1]

    // Loop through each character in the first word
    for (let i = 0; i < firstWord.length; i++) {
        // If the current character in the first word is not the same as the current character in the last word, break the loop
        if (firstWord[i] !== lastWord[i]) {
            break
        } else {
            // If the characters are the same, push the substring from the start of the first word to the current character into the commonPre array
            commonPre.push(firstWord.substring(0, i + 1));
        }
    }
    // If there are any common prefixes, return the last one (which is the longest); otherwise, return an empty string
    return commonPre.length > 0 ? commonPre[commonPre.length - 1] : "";
};

// Test the function with an example input
console.log(longestCommonPrefix(["dog", "racecar", "car"]))