// @ts-nocheck

var merge = function (nums1, m, nums2, n) {
    // Initialize pointers for the last elements of both arrays
    let first = m - 1;
    let second = n - 1;

    // Loop through the merged array from the end to the beginning
    for (let i = m + n - 1; i >= 0; i--) {
        // If all elements from the second array have been placed, exit the loop
        if (second < 0) {
            break;
        }
        // Compare the last elements of both arrays
        if (nums1[first] > nums2[second]) {
            // If the element from the first array is larger, place it in the merged array
            nums1[i] = nums1[first];
            // Move the pointer of the first array to the next smaller element
            first--;
        } else {
            // If the element from the second array is larger or equal, place it in the merged array
            nums1[i] = nums2[second];
            // Move the pointer of the second array to the next smaller element
            second--;
        }
    }
};

// T - O(m+n)
// S - O(1)