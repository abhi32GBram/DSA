// @ts-nocheck
'use strict';

// Removed stdin event listeners and readLine function

function alternatingCharacters(s) {
  s = s.split("");
  const N = s.length;
  let res = 0;
  for (let i = 0; i < N - 1; i++) {
    if (s[i] === s[i + 1]) {
      res++;
    }
  }
  return res;
}

function main() {
  // Directly call the function with your input data
  const inputData = [
    "AAAA",
    "BBBBB",
    "ABABABAB",
    "BABABA",
    "AAABBB"
  ];

  const q = inputData.length;

  for (let qItr = 0; qItr < q; qItr++) {
    const s = inputData[qItr];

    const result = alternatingCharacters(s);

    console.log(result); // Output the result to the console
  }
}

main(); // Call the main function
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


