// This is an input class. Do not edit.
class LinkedList {
    head = null;
    tail = null;

    createNode(value) {
        return {
            value,
            next: null
        };
    }

    append(value) {
        let node = this.createNode(value);
        if (!this.head) {
            this.head = node;
        }

        if(!this.tail) {
            this.tail = node;
        }
        else {
            // set orig tail to point to new tail
            this.tail.next = node;

            // set tail to point new node
            this.tail = node;
        }
    }

    toArray() {
        const arrayElements = [];
        let currentNode = this.head;
        while (currentNode) {
            arrayElements.push(currentNode);
            currentNode = currentNode.next;
        }
        // console.log(currentNode);
        return arrayElements;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    // Step 1: Set Defaults
    const head = linkedList;
    let curPtr = linkedList.next;
    let prevPtr = linkedList;
    // Step 2: Traverse the list, while curPtr points to a node
    while (curPtr) {
        /*Step 3: Conditon: If curPtr.value === prevPtr.value, 
        then set prevPtr.next to the node after the curPtr. 
        Then set curPtr to the node after the prevPtr*/
        if (curPtr.value === prevPtr.value) {
            // Set prevPtr node to node after curPtr 
            prevPtr.next = curPtr.next
            // Set the curPtr to the node after the prevPtr
            curPtr = prevPtr.next
        }
        // Step 4: If ptr values !=,  shift both ptrs to the next node	
        else {
            prevPtr = prevPtr.next;
            curPtr = curPtr.next;
        }
    }
    // Step 5: Return the new linkedList
    return head;
}

// Do not edit the lines below.
//   exports.LinkedList = LinkedList;
//   exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(2);
linkedList.append(3);
console.log("LinkedList to array:", linkedList.toArray());
console.log("Remove Duplicate:", removeDuplicatesFromLinkedList(linkedList));

