// @ts-nocheck

// Define the binary search function
const binarySearch = (arr, target) => {
    // Initialize the left pointer to the start of the array
    let left = 0;
    // Initialize the right pointer to the end of the array
    let right = arr.length - 1;

    // Continue searching while the left pointer is less than or equal to the right pointer
    while (left <= right) {
        // Calculate the middle index of the current search space
        const mid = Math.floor((left + right) / 2);

        // If the element at the middle index matches the target, return the middle index
        if (arr[mid] === target) {
            return mid;
        } 
        // If the element at the middle index is less than the target, move the left pointer to the right of the middle index
        else if (arr[mid] < target) {
            left = mid + 1;
        } 
        // If the element at the middle index is greater than the target, move the right pointer to the left of the middle index
        else {
            right = mid - 1;
        }
    }

    // If the target is not found in the array, return -1
    return -1; 
}

console.log(binarySearch([1,2,3,4,5,6,7],4))