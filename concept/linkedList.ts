// @ts-nocheck

// Define a Node class
// Each node in a linked list contains some data and a reference to the next node in the list
class Node {
    // Constructor takes data as input
    // This data could be any value, depending on what the linked list is being used for
    constructor(data) {
        // Assign data to the node
        // This data is stored in the node object itself
        this.data = data
        // Initialize next as null
        // This indicates that there is no next node in the list yet
        this.next = null
    }
}


class LL {
    // Constructor for the LinkedList class
    // Initializes the head of the linked list as null
    constructor() {
        this.head = null
    }

    // Method to add a node at the beginning of the linked list
    // Takes data as an argument to create a new node
    addHead(data) {
        // Creates a new node with the given data
        const newNode = new Node(data)
        // Sets the next property of the new node to the current head of the linked list
        newNode.next = this.head
        // Updates the head of the linked list to the new node
        this.head = newNode
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    /**
     * Adds a new node with the given data to the end of the linked list.
     *  data - The data to be stored in the new node.
     */
    addTail(data) {
        // Create a new node with the given data
        const newNode = new Node(data);
        // If the linked list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // Traverse to the last node of the linked list
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        // Link the new node to the end of the linked list
        current.next = newNode;
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    /**
     * Calculates the size of the linked list.
     * @returns {number} The number of nodes in the linked list.
     */
    LL_Size() {
        // Initialize count to 0
        let count = 0
        // Start from the head of the linked list
        let current = this.head
        // Traverse through the linked list
        while (current.next) {
            // Increment count for each node
            count++
            // Move to the next node
            current = current.next
        }
        // Return the count
        return count
    }
    // ------------------------------------------------------------------------------------------------------------------------------------

    addNode(data) {
        // Create a new node with the given data
        const newNode = new Node(data);
        // If the linked list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // Set the next of the new node as the current head
        newNode.next = this.head;
        // Update the head of the linked list to the new node
        this.head = newNode;
    }

    // ------------------------------------------------------------------------------------------------------------------------------------

    /**
 * Adds a new node with the given data at the specified index in the linked list.
 * @param {number} index - The position in the linked list where the new node should be added.
 * @param {any} data - The data to be stored in the new node.
 */
    addAtIndex(index, data) {
        // Check if the index is valid
        // An index is invalid if it's less than 0 or greater than the size of the linked list
        if (index < 0 || index > this.LL_Size()) {
            console.error("INVALID INDEX")
        }
        // Create a new node with the given data
        // The Node constructor takes the data as an argument and assigns it to the node
        const newNode = new Node(data)
        // If the index is 0, add the new node at the beginning of the linked list
        // This is done by setting the next of the new node as the current head and updating the head to the new node
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        // Traverse to the node before the specified index
        // This is done by starting from the head of the linked list and moving to the next node until reaching the node before the specified index
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        // Insert the new node at the correct position
        // This is done by setting the next of the new node as the next of the current node and updating the next of the current node to the new node
        newNode.next = current.next
        current.next = newNode
    }

    // ------------------------------------------------------------------------------------------------------------------------------------
    removeHead() {
        if (!this.head) {
            return
        }
        this.head = this.head.next
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    removeTail() {
        // If the linked list is empty (i.e., the head is null), there's nothing to remove, so we return early
        if (!this.head) {
            return
        }

        // We start from the head of the linked list
        let current = this.head

        // We continue traversing the linked list as long as the current node has a next node and that next node has a next node
        // This ensures that we stop at the second-to-last node in the list
        while (current.next && current.next.next) {
            // Move to the next node
            current = current.next
        }

        // Once we've reached the second-to-last node, we set its next property to null
        // This effectively removes the last node from the linked list
        current.next = null
    }
    // ------------------------------------------------------------------------------------------------------------------------------------

    removeFromIndex(index) {
        if (index < 0 || index > this.LL_Size()) {
            console.error("INVALID INDEX !")
            return
        }

        if (index === 0) {
            this.head = this.head.next
            return
        }

        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }

        if (current.next) {
            current.next = current.next.next
        }
    }

    // ------------------------------------------------------------------------------------------------------------------------------------

    display_LL() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function createLinkedList() {
    // Prompt the user for the size of the linked list
    rl.question("Enter the size of the linked list: ", (size) => {
        size = parseInt(size);

        // Create a new linked list
        let ll = new LL();

        // Recursive function to add nodes
        function addNodes(i) {
            if (i >= size) {
                ll.display_LL();
                return;
            }

            // Prompt the user for the data to be added at each node
            rl.question(`Enter data for node ${i + 1}: `, (data) => {
                // Add the data to the linked list
                ll.addNode(data);
                // Call the function again for the next node
                addNodes(i + 1);
            });
        }

        // Start the recursion
        addNodes(0);
    });
}




const linkeL = new LL()

linkeL.addHead(1)
linkeL.addNode(12)
linkeL.addNode(13)
linkeL.addNode(14)
linkeL.addNode(15)

linkeL.display_LL()
//~~~~~~~~~~~~~~~~~~~~~~~~
createLinkedList();