// @ts-nocheck

'use strict';

// Function to perform insertion sort on the array
function insertionSort1(n, arr) {
    // The last element of the array is considered for sorting
    let sort = arr[arr.length -   1];
    let i;
    // Loop through the array from the second last element to the first
    for (i = arr.length -   2; (i >=   0) && (arr[i] > sort); i--) {
        // Shift elements of arr[0..i-1], that are greater than sort, to one position ahead
        arr[i +   1] = arr[i];
        // Print the array after each shift
        printArray(arr);
    }
    // Insert the sort element at its correct position
    arr[i +   1] = sort;
    // Print the final sorted array
    printArray(arr);
}

// Function to print the array
function printArray(ar) {
    let output = '';
    // Loop through the array and append each element to the output string
    for (let i =   0; i < ar.length; i++) {
        output += ar[i] + " ";
    }
    // Print the output string
    console.log(output.trim());
}

// Main function to simulate the input process and call the insertionSort1 function
function main() {
    // Number of elements in the array
    const n =   5;
    // The array to be sorted
    const arr = [2,   4,   6,   8,   3];
    // Call the insertionSort1 function with the array
    insertionSort1(n, arr);
}

// Call the main function to start the program
main();
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'alternatingCharacters' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts STRING s as parameter.
//  */

// function alternatingCharacters(s) {
//   s = s.split("")
//   const N = s.length
//   let res = 0
//   for (let i = 0; i < N - 1; i++) {
//     if (s[i] === s[i + 1]) {
//       res++
//     }
//   }
//   return res

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const q = parseInt(readLine().trim(), 10);

//     for (let qItr = 0; qItr < q; qItr++) {
//         const s = readLine();

//         const result = alternatingCharacters(s);

//         ws.write(result + '\n');
//     }

//     ws.end();
// }


