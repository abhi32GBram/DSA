// USING 2 FOR LOOPS - 

// Define a function named twoSum_for that takes two parameters: nums and target
var twoSum_for = function (nums, target) {
    // Iterate over the nums array using a nested loop
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            // Check if the sum of the current number and another number equals the target
            if (nums[i] + nums[j] === target) {
                // If it does, return an array containing the indices of the two numbers
                return [i, j]
            }
        }
    }
};


// USING HASMAP #1 

// Define a function named twoSum that takes two parameters: nums and target
var twoSum = function (nums, target) {
    // Create a new Map object to store the numbers and their indices
    let numMap = new Map()
    // Iterate over the nums array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        let complement = target - nums[i];
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // If it does, return an array containing the index of the complement and the current index
            return [numMap.get(complement), i]
        }
        // If the complement doesn't exist in the map, add the current number and its index to the map
        numMap.set(nums[i], i)
    }
    // If no pair summing to the target is found, return an empty array
    return []
};


// USING HASHMAP #2 

// Define a function named twoSum_deux that takes two parameters: nums and target
var twoSum_deux = function (nums, target) {
    // Initialize an empty object to act as a map
    var map = {}
    // Iterate over the nums array
    for (let i = 0; i < nums.length; i++) {
        // Store the current number in a variable
        var value = nums[i]
        // Calculate the complement of the current number
        var complementPair = target - value
        // Check if the complement exists in the map
        if (map[complementPair] !== undefined) {
            // If it does, return an array containing the index of the complement and the current index
            return [map[complementPair], i]
        } else {
            // If the complement doesn't exist in the map, add the current number and its index to the map
            map[value] = i
        }
    }
};