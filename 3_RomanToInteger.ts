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


// METHOD #2 :

// Define a function named romanToInt_deux that takes one parameter: s
var romanToInt_deux = function (s) {
    // Define a constant object roman that maps Roman numerals to their corresponding integer values
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // Initialize a variable sum to 0
    let sum = 0
    // Iterate over the length of the string s
    for (let i = 0; i < s.length; i++) {
        // Get the current and next characters in the string
        let currentP = s[i]
        let nextP = s[i + 1]

        // If the value of the current character is less than the value of the next character, subtract the value of the current character from the sum
        if (roman[currentP] < roman[nextP]) {
            sum -= roman[currentP]
        } else {
            // Otherwise, add the value of the current character to the sum
            sum += roman[currentP]
        }
    }
    // Return the final sum
    return sum
};

// BEST METHOD :

// Define a function named romanToInt_best that takes one parameter: s
var romanToInt_best = function (s) {
    // Define a constant object romanVal that maps Roman numerals to their corresponding integer values
    const romanVal = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    // Initialize a variable result to 0
    let result = 0;
    // Iterate over the length of the string s
    for (let i = 0; i < s.length; i++) {
        // Get the integer value of the current symbol
        let crtSymVal = romanVal[s[i]];
        // Get the integer value of the next symbol
        let nxtSymVal = romanVal[s[i + 1]];
        // If the next symbol's value is greater than the current symbol's value, subtract the current symbol's value from the result
        if (nxtSymVal > crtSymVal) {
            result += -crtSymVal;
        } else {
            // Otherwise, add the current symbol's value to the result
            result += crtSymVal;
        }
    }
    // Return the final result
    return result;
};