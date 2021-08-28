class Node {
    constructor(value) {
        this.value = value;
        // every node has two children
        this.left = null;
        this.right = null;
    }
    // set a value for instance property, on this Node object
    add(value) {

        // If current node does not have a value, then set it.
        if (this.value === null) {
            this.value = value;
            return;
        }
        // If incoming value is bigger then the current value, it goes to the right
        if (value > this.value) {
            // Note: We don't want to overwrite the right ptr of the root node if a value already exists.  In this case we should perform an add on the right node of the current right node.
            if(this.right) {
                this.right.add(value);
                // end function 
                return;
            }
            // Else create a right childNode with the value
            const newNode = new Node(value);
            this.right = newNode;
            return;
        }
        // If incoming value is smaller than current value, it goes to the left
        if (value < this.value) {
            // Note: We don't want to overwrite the left ptr of the root node if a value already exists. In this case, we should perform an add on the next left node of the current left node.
            if(this.left) {
                this.left.add(value);
                //end function
                return;
            }
            const newNode = new Node(value);
            
            this.left = newNode;
            return;
        }
    }

    find(value) {
        // If incoming value is equal to current node value return this Node object.
        if (this.value === value) {
            return this;
        }
        // if incoming value is bigger than current nodes value, it came from the right side.  Test if the right child exists (stop at leaf node).  The target node has to be on the right side current node.
        if(value > this.value && this.right){
            // recursive call that searches the value of every node on the right side, until the result is find or leaf node is reached
            return this.right.find(value);
        }
        else if(!this.right) {
            return -1;
        }
        // if incoming value is smaller than current node value, it came from and left child.  Test if left child exists (stop at leaf node), The target node has to be on the left side of the current node.
        if (value < this.value && this.left) {
            // recursive call down the left branch
            return this.left.find(value);
        }
        else if(!this.left){
            return -1;
        }
    }
}

class Tree {
    constructor() {
        // Composition: root is a Node object
        this.root = new Node(null);
    }
    add(value) {
        // always operate on the rootNode
        this.root.add(value);
    }
    remove(value) {
        this.root.remove(value);
    }
    find(value) {
        return this.root.find(value);
    }
}

//run
const tree = new Tree();
tree.add(10);
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(20);
tree.add(25);
tree.add(39);

console.log(tree);
console.log(tree.find(5));
console.log('No node with value 7 in tree', tree.find(7));
console.log(tree.find(39));
