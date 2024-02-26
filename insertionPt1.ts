// @ts-nocheck

// Function to perform insertion sort on an array, with a focus on the last element
function insertionSort1(n, arr) {
    // Store the last element of the array
    let sort = arr[arr.length -   1];
    let i;
    // Iterate through the array from the second last element to the first
    // Shift elements that are greater than the last element to the right
    for (i = arr.length -   2; (i >=   0) && (arr[i] > sort); i--) {
        arr[i +   1] = arr[i];
        // Print the array after each shift
        printArray(arr);
    }
    // Insert the last element in its correct position
    arr[i +   1] = sort;
    // Print the final sorted array
    printArray(arr);
}

// Function to print the array elements
function printArray(ar) {
    let output = '';
    // Iterate through the array and concatenate the elements into a string
    for (let i =   0; i < ar.length; i++) {
        output += ar[i] + " ";
    }
    // Print the array elements
    console.log(output.trim());
}

// Main function to test the insertion sort
function main() {
    const n =   5;
    const arr = [2,   4,   6,   8,   3];
    // Call the insertion sort function with the array
    insertionSort1(n, arr);
}

// Call the main function to start the program
main();
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine =  0;

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

// function insertionSort1(n, arr) {
//     let sort = arr[arr.length -  1];
//     let i;
//     for (i = arr.length -  2; (i >=  0) && (arr[i] > sort); i--) {
//         arr[i +  1] = arr[i];
//         printArray(arr);
//     }
//     arr[i +  1] = sort;
//     printArray(arr);
// }

// function printArray(ar) {
//     let output = '';
//     for (let i =  0; i < ar.length; i++) {
//         output += ar[i] + " ";
//     }
//     console.log(output.trim());
// }
// function main() {
//     const n = parseInt(readLine().trim(),  10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp,  10));

//     insertionSort1(n, arr);
// }


// // wrong solution but correct formatting :
// // 'use strict';

// // process.stdin.resume();
// // process.stdin.setEncoding('utf-8');

// // let inputString = '';
// // let currentLine =   0;

// // process.stdin.on('data', function(inputStdin) {
//     // inputString += inputStdin;
// // });

// // process.stdin.on('end', function() {
//     // inputString = inputString.split('\n');

//     // main();
// // });

// // function readLine() {
//     // return inputString[currentLine++];
// // }

// // function insertionSort1(n, arr) {
//     // for (let i =   1; i < n; i++) {
//         // let key = arr[i];
//         // let j = i -   1;

//         // // Move elements of arr[0..i-1], that are greater than key,
//         // // to one position ahead of their current position
//         // while (j >=   0 && arr[j] > key) {
//             // arr[j +   1] = arr[j];
//             // j = j -   1;
//         // }
//         // arr[j +   1] = key;

//         // // Print the array after each insertion
//         // printArray(arr);
//     // }
// // }

// // function printArray(ar) {
//     // console.log(ar.join(" "));
// // }

// // function main() {
//     // const n = parseInt(readLine().trim(),   10);

//     // const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp,   10));

//     // insertionSort1(n, arr);
// // }





