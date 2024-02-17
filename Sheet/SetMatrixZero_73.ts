// @ts-nocheck


// Function to set matrix zeroes
var setZeroes = function (matrix) {
    // Flags to track if the first row and column should be set to zero
    // These flags are used to mark the first row and column if they contain a zero
    let firstRow = false;
    let firstCol = false;

    // Iterate over the matrix to find zeros and set the first row and column accordingly
    // We use two nested loops to traverse the matrix
    for (let i =   0; i < matrix.length; i++) {
        for (let j =   0; j < matrix[0].length; j++) {
            // Check if the current cell is zero
            if (matrix[i][j] ===   0) {
                // If the current cell is zero, set the corresponding cell in the first row and column to zero
                // This is done to mark the cells that will be set to zero in the next steps
                if (i ===   0) firstRow = true;
                if (j ===   0) firstCol = true;
                matrix[0][j] =   0;
                matrix[i][0] =   0;
            }
        }
    }

    // Iterate over the rest of the matrix, setting cells to zero if their corresponding cell in the first row or column is zero
    // We start from the second row and column to avoid setting the first row and column to zero again
    for (let a =   1; a < matrix.length; a++) {
        for (let b =   1; b < matrix[0].length; b++) {
            // Check if the corresponding cell in the first row or column is zero
            if (matrix[a][0] ===   0 || matrix[0][b] ===   0) {
                // If the corresponding cell in the first row or column is zero, set the current cell to zero
                matrix[a][b] =   0;
            }
        }
    }

    // If the first row was marked to be set to zero, set all cells in the first row to zero
    // This step ensures that all cells in the first row are zero if the first row contains a zero
    if (firstRow) {
        for (let x =   0; x < matrix[0].length; x++) {
            matrix[0][x] =   0;
        }
    }

    // If the first column was marked to be set to zero, set all cells in the first column to zero
    // This step ensures that all cells in the first column are zero if the first column contains a zero
    if (firstCol) {
        for (let y =   0; y < matrix.length; y++) {
            matrix[y][0] =   0;
        }
    }
};