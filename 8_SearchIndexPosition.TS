// @ts-nocheck

/**
 * This function takes an array of numbers and a target number as input.
 * It uses binary search to find the position where the target number should be inserted in the sorted array.
 * If the target number is already present in the array, it returns the index of the first occurrence.
 * If the target number is not present, it returns the index where it should be inserted to maintain the sorted order.
 *
 * @param {number[]} nums - An array of numbers sorted in ascending order.
 * @param {number} target - The target number to be searched or inserted.
 * @returns {number} - The index where the target number should be inserted or found.
 */
var searchInsert = function (nums, target) {
    let left = 0
    let right = nums.length

    // Binary search algorithm
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            // Target found, return its index
            return mid
        } else if (nums[mid] < target) {
            // Target is greater than the middle element, continue searching in the right half
            left = mid + 1
        } else {
            // Target is less than the middle element, continue searching in the left half
            right = mid - 1
        }
    }
    // Target not found, return the index where it should be inserted
    return left
};
console.log(searchInsert([1, 3, 5, 6], 7))

// ---------------------------------------------------------------------------------------------------------
// MEHTOD #2 : Really Fast :

/**
 * This function takes an array of numbers and a target number as input.
 * It iterates over the array to find the position where the target number should be inserted in the sorted array.
 * If the target number is already present in the array, it returns the index of the first occurrence.
 * If the target number is not present, it returns the index where it should be inserted to maintain the sorted order.
 *
 * @param {number[]} nums - An array of numbers sorted in ascending order.
 * @param {number} target - The target number to be searched or inserted.
 * @returns {number} - The index where the target number should be inserted or found.
 */
var searchInserte = function (nums, target) {
    if (nums.length === 0) {
        // If the array is empty, return false
        return false;
    }

    let i = 0;

    // Iterate over the array
    while (i < nums.length) {
        if (nums[i] === target) {
            // Target found, return its index
            return i;
        } else if (nums[i] >= target) {
            // Target is greater - equal to, than the current element, return the current index
            return i;
        }
        i++;
    }
    // Target not found, return the length of the array
    return nums.length;
};

console.log(searchInserte([1, 3, 5, 6], 2))