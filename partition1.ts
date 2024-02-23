// @ts-nocheck

// The quickSort function sorts an array of numbers using the quicksort algorithm.
function quickSort(arr) {
    // Base case: If the array has  1 or  0 elements, it is already sorted.
    if (arr.length <=   1) {
        return arr;
    }

    // Partition the array around a pivot. The pivot is the first element.
    const pivotIndex = partition(arr);

    // Recursively sort the elements less than the pivot.
    const left = arr.slice(0, pivotIndex);
    // Recursively sort the elements greater than the pivot.
    const right = arr.slice(pivotIndex +   1);


    // Combine the sorted elements and the pivot to form the sorted array.
    return quickSort(left).concat([arr[pivotIndex]]).concat(quickSort(right));
}

// The partition function rearranges the array elements around a pivot.
function partition(array) {
    // The pivot is the first element of the array.
    let pivotIndex =   0;
    let pivotValue = array[pivotIndex];
    
    // Swap the pivot with the last element of the array.
    swap(array, pivotIndex, array.length -   1);
    
    // Index to keep track of the position where the pivot should be placed.
    let indexToReturn =   0;
    for (let i =   0; i < array.length; i++){
        // If the current element is less than the pivot, swap it with the element at indexToReturn.
        if (array[i] < pivotValue){
            swap(array, i, indexToReturn);
            indexToReturn++;
        }
    }
    
    // Swap the pivot back to its correct position.
    swap(array, indexToReturn, array.length -   1);
    // Return the index where the pivot is placed.
    return indexToReturn;
}

// The swap function swaps two elements in the array.
function swap(array, i, j) {
    // Temporary variable to hold the value of the first element.
    let temp = array[i];
    // Swap the first element with the second element.
    array[i] = array[j];
    array[j] = temp;
}

// Example usage
const arr = [4,   5,   3,   7,   2];
const sortedArr = quickSort(arr);
console.log(sortedArr);

// // 'use strict';

// // const fs = require('fs');

// // process.stdin.resume();
// // process.stdin.setEncoding('utf-8');

// // let inputString = '';
// // let currentLine =  0;

// // process.stdin.on('data', function(inputStdin) {
// //     inputString += inputStdin;
// // });

// // process.stdin.on('end', function() {
// //     inputString = inputString.split('\n');

// //     main();
// // });

// // function readLine() {
// //     return inputString[currentLine++];
// // }

// // function quickSort(arr) {
// //     if (arr.length <=  1) {
// //         return arr;
// //     }
// //     const pivotIndex = partition(arr);
// //     const left = arr.slice(0, pivotIndex);
// //     const right = arr.slice(pivotIndex +  1);
// //     return quickSort(left).concat([arr[pivotIndex]]).concat(quickSort(right));
// // }

// // function partition(array) {
// //     let pivotIndex =  0; 
// //     let pivotValue = array[pivotIndex];
    
// //     swap(array, pivotIndex, array.length -  1); 
    
    
// //     let indexToReturn =  0;
// //     for (let i =  0; i < array.length; i++){
// //         if (array[i] < pivotValue){
// //             swap(array, i, indexToReturn);
// //             indexToReturn++;
// //         }
// //     }
    
// //     swap(array, indexToReturn, array.length -  1); 
// //     return indexToReturn;
// // }

// // function swap(array, i, j) {
// //     let temp = array[i];
// //     array[i] = array[j];
// //     array[j] = temp;
// // }

// // function main() {
// //     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

// //     const n = parseInt(readLine().trim(),  10);

// //     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp,  10));

// //     const result = quickSort(arr);

// //     ws.write(result.join(' ') + '\n');

// //     ws.end();
// // }
