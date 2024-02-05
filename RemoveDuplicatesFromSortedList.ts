//  @ts-nocheck
var deleteDuplicates = function (head) {
    // Initialize a pointer to the head of the linked list
    let cur = head;

    // Iterate through the linked list as long as the current node exists and has a next node
    while (cur && cur.next) {
        // Check if the value of the current node is equal to the value of the next node
        if (cur.val === cur.next.val) {
            // If the values are equal, it means we have found a duplicate.
            // We skip the duplicate node by updating the 'next' pointer of the current node
            // to point to the node after the duplicate.
            cur.next = cur.next.next;
        } else {
            // If the values are not equal, we move to the next node in the list
            // by updating the 'cur' pointer to the next node.
            cur = cur.next;
        }
    }

    // Once we have iterated through the entire list and removed all duplicates,
    // we return the head of the modified list.
    // Note that the head may still contain a duplicate if it was the first element in the list,
    // but since the problem specifies that the list is sorted, we know that any duplicates
    // will be consecutive, and thus the head will either remain unchanged or be updated
    // to point to the second occurrence of the duplicate value.
    return head;
};


console.log(deleteDuplicates([1, 1, 2, 3, 4]))


// METHOD #2 : USING RECURSION 

var deleteDuplicates = function(head) {
    // Base case: If the head of the linked list is null, there are no nodes to process,
    // so we return null to indicate the end of the list.
    if (!head) return null;

    // While the current node has a next node and the value of the current node is equal
    // to the value of the next node, we keep moving the head forward to skip the duplicates.
    // This loop will stop once we find a node whose value is different from the next node's value.
    while (head.next && head.val == head.next.val) {
        head.next = head.next.next;
    }

    // Recursively call deleteDuplicates on the next node. This will continue to remove
    // duplicates from the rest of the list, ensuring that all consecutive duplicates
    // are eliminated.
    head.next = deleteDuplicates(head.next);

    // Return the head of the modified list. Since we've already handled the duplicates
    // for the current node and its immediate successors, we can return the head as is.
    return head;
};


// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }



// var deleteDuplicates = function (head) {

//     let temp = new ListNode(-Infinity, head)
//     let current = head
//     let prev = temp

//     while (current) {
//         if (current.val === prev.val) {
//             while (current && current.val === prev.val) {
//                 current = current.next
//             }
//             prev = current
//         } else {
//             prev.next = current
//             current = current.next
//         }
//     }
//     return temp.next
// };


// console.log(deleteDuplicates([1,1,2]))


// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // Method to add a new node at the end of the list
//     append(value) {
//         const newNode = new ListNode(value);
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     // Method to print the list for debugging purposes
//     printList() {
//         let current = this.head;
//         while (current) {
//             console.log(current.val);
//             current = current.next;
//         }
//     }
// }

// function deleteDuplicates(head) {
//     if (!head || !head.next) {
//         return head; // If the list is empty or has only one element, no duplicates to remove
//     }

//     let current = head;
//     let prev = head; // Start with the head itself as the previous node

//     while (current && current.next) {
//         if (current.val === current.next.val) {
//             // Skip all duplicates
//             while (current.next && current.val === current.next.val) {
//                 current = current.next;
//             }
//             // Update the next pointer of the previous node to skip the duplicates
//             prev.next = current.next;
//         } else {
//             // Move to the next pair of nodes
//             prev = current;
//         }
//         current = current.next;
//     }

//     return head; // Return the head of the modified list
// }


// console.log(deleteDuplicates([1, 1, 3]))


// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function arrayToList(arr) {
//     let dummyRoot = new ListNode(0);
//     let current = dummyRoot;
//     for (let i = 0; i < arr.length; i++) {
//         current.next = new ListNode(arr[i]);
//         current = current.next;
//     }
//     return dummyRoot.next;
// }

// function deleteDuplicates(head) {
//     if (!head || !head.next) {
//         return head; // If the list is empty or has only one element, no duplicates to remove
//     }

//     let current = head;
//     let prev = head; // Start with the head itself as the previous node

//     while (current && current.next) {
//         if (current.val === current.next.val) {
//             // Skip all duplicates
//             while (current.next && current.val === current.next.val) {
//                 current = current.next;
//             }
//             // Update the next pointer of the previous node to skip the duplicates
//             prev.next = current.next;
//         } else {
//             // Move to the next pair of nodes
//             prev = current;
//         }
//         current = current.next;
//     }

//     return head; // Return the head of the modified list
// }

// function listToArray(list) {
//     let arr = [];
//     while (list) {
//         arr.push(list.val);
//         list = list.next;
//     }
//     return arr;
// }

// // Function to print the list
// function printList(node) {
//     while (node) {
//         console.log(node.val);
//         node = node.next;
//     }
// }

// // Function to test the deleteDuplicates functionality
// function deleteDuplicatesFromArray(arr) {
//     let list = arrayToList(arr);
//     const resultHead = deleteDuplicates(list);
//     return listToArray(resultHead);
// }

// // Sample input: an array with some duplicate values
// const inputArray = [1, 2,2, 3, 4];

// console.log("Original array:", inputArray);

// const resultArray = deleteDuplicatesFromArray(inputArray);

// console.log("Array after deleting duplicates:", resultArray);
