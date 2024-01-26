// @ts-nocheck

// Define a class for a linked list node
class ListNode {
    // Constructor for the ListNode class
    constructor(val, next) {
        // Initialize the value of the node
        this.val = (val === undefined ? 0 : val);
        // Initialize the next node in the list
        this.next = (next === undefined ? null : next);
    }
}

// Function to merge two sorted linked lists
function mergeTwoLists(list1, list2) {
    // If list1 is empty, return list2
    if (!list1) return list2
    // If list2 is empty, return list1
    if (!list2) return list1

    // If the value of the first node in list1 is less than or equal to the value of the first node in list2
    if (list1.val <= list2.val) {
        // Recursively call mergeTwoLists on the rest of list1 and all of list2
        list1.next = mergeTwoLists(list1.next, list2)
        // Return the merged list starting with list1
        return list1
    }

    // If the value of the first node in list1 is greater than the value of the first node in list2
    if (list1.val > list2.val) {
        // Recursively call mergeTwoLists on the rest of list2 and all of list1
        list2.next = mergeTwoLists(list2.next, list1)
        // Return the merged list starting with list2
        return list2
    }
}

// BEST SOLUTION 

// Define a function to merge two sorted linked lists
var mergeTwoLists_1 = function (l1, l2) {
    // If the first list (l1) is empty, return the second list (l2)
    if (!l1) return l2;
    // If the second list (l2) is empty, return the first list (l1)
    else if (!l2) return l1;
    // If the value of the first node in the first list (l1) is less than or equal to the value of the first node in the second list (l2)
    else if (l1.val <= l2.val) {
        // Recursively call mergeTwoLists_1 on the rest of the first list (l1.next) and all of the second list (l2)
        l1.next = mergeTwoLists_1(l1.next, l2);
        // Return the first list (l1)
        return l1;
    } 
    // If the value of the first node in the first list (l1) is greater than the value of the first node in the second list (l2)
    else {
        // Recursively call mergeTwoLists_1 on the rest of the second list (l2.next) and all of the first list (l1)
        l2.next = mergeTwoLists_1(l1, l2.next);
        // Return the second list (l2)
        return l2
    }
};



console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) 