// Define a function named romanToInt that takes one parameter: s
var romanToInt = function (s) {
    // Initialize a variable sum to 0
    let sum = 0
    // Iterate over the length of the string s
    for (let i = 0; i < s.length; i++) {
        // Get the character before the current character
        let prev = s[i - 1]
        // Switch statement to handle different cases based on the current character
        switch (s[i]) {
            case "I":
                // If the current character is "I", add 1 to sum
                sum += 1
                break
            case "V":
                // If the current character is "V", check if the previous character was "I"
                sum = prev === "I" ? sum + 3 : sum + 5
                break
            case "X":
                // If the current character is "X", check if the previous character was "I"
                sum = prev === "I" ? sum + 8 : sum + 10
                break
            case "L":
                // If the current character is "L", check if the previous character was "X"
                sum = prev === "X" ? sum + 30 : sum + 50
                break
            case "C":
                // If the current character is "C", check if the previous character was "X"
                sum = prev === "X" ? sum + 80 : sum + 100
                break
            case "D":
                // If the current character is "D", check if the previous character was "C"
                sum = prev === "C" ? sum + 300 : sum + 500
                break
            case "M":
                // If the current character is "M", check if the previous character was "C"
                sum = prev === "C" ? sum + 800 : sum + 1000
                break
        }
    }
    // Return the final sum
    return sum
};