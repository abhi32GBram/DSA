// @ts-nocheck

function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 4; i++) {
        x += arr[i];
    }

    for (let i = 1; i < 5; i++) {
        y += arr[i];
    }

    console.log(x + " " + y);
}

// Call the function with the input array
miniMaxSum([1, 2, 3, 4, 5]);
// 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
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

// /*
//  * Complete the 'miniMaxSum' function below.
//  *
//  * The function accepts INTEGER_ARRAY arr as parameter.
//  */

// function miniMaxSum(arr) {

//     arr.sort((a, b) => a - b);

//     let x =  0;
//     let y =  0;


//     for (let i =  0; i <  4; i++) {
//         x += arr[i];
//     }


//     for (let i =  1; i <  5; i++) {
//         y += arr[i];
//     }

//     console.log(x + " " + y);
// }

// function main() {
//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp,  10));

//     miniMaxSum(arr);
// }



