// @ts-nocheck

// FINALLL AND CORRECTLY WORKING SNIIPET 

// Define a function named 'strStrings' that takes two parameters: 'haystack' and 'needle'
var strStrings = function (haystack, needle) {
    // Check if 'haystack' is equal to 'needle' or if 'needle' is an empty string
    // If either condition is true, return 0
    if (haystack === needle || needle === "") {
        return 0
    }

    // Iterate over each character in 'haystack'
    for (let i = 0; i < haystack.length; i++) {
        // Check if the current character in 'haystack' is equal to the first character in 'needle'
        if (haystack[i] === needle[0]) {
            // Extract a substring from 'haystack' starting at the current index and of length equal to the length of 'needle'
            let substrings = haystack.substring(i, i + needle.length)
            // Check if the extracted substring is equal to 'needle'
            if (substrings === needle) {
                // If they are equal, return the current index
                return i
            }
        }
    }
    // If no match is found after iterating over all characters in 'haystack', return -1
    return -1
};

console.log(strStrings("sadtubsad", "sad"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Declare a variable 'strStr' as a function that takes two parameters: 'haystack' and 'needle'
var strStr = function (haystack, needle) {
    // Initialize variables i, j, and k
    // i is used to keep track of the current index in 'haystack'
    // j is used to keep track of the current index in 'needle'
    // k is used to compare characters of 'needle' and 'haystack'
    let i = 0, j = 0, k = 0

    // Loop through the length of 'haystack'
    // This loop is used to move the window over 'haystack'
    while (i < haystack.length) {
        // Loop through the length of 'needle'
        // This loop is used to compare characters of 'needle' and 'haystack'
        while (needle[j] == haystack[k]) {
            // Increment j and k
            // This is done because we have found a matching character
            j++
            k++
            // If j equals the length of 'needle', return i
            // This means we have found a complete match of 'needle' in 'haystack'
            if (j == needle.length) {
                return i
            }
            // If k equals the length of 'needle', return -1
            // This means we have moved beyond the length of 'needle' in 'haystack'
            if (k == needle.length) {
                return -1
            }
        }
        // If 'needle' character at position j is not equal to 'haystack' character at position k
        // This means we have found a mismatch
        if (needle[j] !== haystack[k]) {
            // Increment i
            // Move the window one step forward in 'haystack'
            i++
            // Reset k to i
            // Reset the comparison index in 'haystack'
            k = i
            // Reset j to 0
            // Reset the comparison index in 'needle'
            j = 0
        }
    }
    // If the loop completes without finding a match, return -1
    // This means 'needle' was not found in 'haystack'
    return -1
};


var strStrr = function (haystack, needle) {
    let i = 0, j = 0, k = 0;

    while (i < haystack.length) {
        while (needle[j] == haystack[k]) {
            j++;
            k++;
            if (j == needle.length) {
                return i;
            }
        }
        if (j != 0 && needle[j] !== haystack[k]) {
            i += j;
            j = 0;
        } else {
            i++;
        }
        k = i;
    }
    return -1;
};


var strStrrr = function (haystack, needle) {
    let i = 0, j = 0, k = 0;

    while (i < haystack.length) {
        while (needle[j] == haystack[k]) {
            j++;
            k++;
            if (j == needle.length) {
                return i;
            }
        }
        if (j != 0 && needle[j] !== haystack[k]) {
            i += j;
            j = 0;
        } else {
            i++;
        }
        k = i;
    }
    return -1;
};


var strString = function (haystack, needle) {

    if (!needle) {
        return -1
    }

    let i = 0
    while (haystack.substring(i, haystack.length + 1) !== needle && i <= haystack.length) {
        i++
    }
    return i > haystack.length ? -1 : i
};


