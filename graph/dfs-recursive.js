class Node {

    constructor(name = '', childNames = []) {
        this.name = name;
        //make sure the child object is an instance of this class
        this.children = childNames.map((childName) => new Node(childName, []));
    }

    /* PROBLEM: This methodn is error prone, because it assumes the childnames are chars, however, for the function calls to work properly, the children must be instances of Nodes*/
    // updateNodeWithChildren(name, childNames) {
    //     this.name = name;
    //     const childArray = [];
    //     this.children = childNames.map(childName => {
    //         return { name: childName, children: [] };
    //     });
    //     // IMPORTANT: The object addChild is invoked on must be a Node object
    //     return new Node(this.name, this.children);
    // } // createNode

    addChild(node) {
        // Important: You can add a child to an already existent node object, or create one
        if(!(node instanceof Node)) {
            const {name, children} = node;
            node = new Node(name, children);
        }
        console.log("NODE:", JSON.stringify(node));
        this.children.push(node);
    }
    // array is a memory space we are tracking, which is passed and updated be each recursive call on a childNode object, in the function call stack
    depthFirstSearch(array) {
        // Write your code here.

        // Step3: Push the first name property of this node object
        array.push(this.name);
        // console.log(`Array has this nodes name: ${array}`);

        //Step4: Loop through the nested Node objects and recursively call depth first search, with a specific node.  Each recursive call will push the name of each childNode from left to right.
        for (let index in this.children) {
            console.log(`childNode: ${JSON.stringify(this.children[index])}`);
            const childNode = this.children[index];
            childNode.depthFirstSearch(array);
        }
        console.log(`Array Final: ${array}`);
        return array;
    }//depthFirst Search
}

// Step1: Graph is just a reference to a series of nested Node object instances, however, you can't just create the object structure ({name: 'A', children: []}), you must create a new Node instance and pass it into the addChild method.  Add the three child nodes under node A's children property (B (this.root.children[0]), C(this.root.children[1]), D(this.root.children[2]))
const graph = new Node('A', []);
const bNode = new Node('B', []);
const cNode = new Node('C', []);
const dNode = new Node('D', []);

// Step 2: The object addChild is invoked on must be a Node object
graph.addChild(bNode);
graph.addChild(cNode);
graph.addChild(dNode);

/*************************************/
// add to bNode this.root.children[0]
let eNode = new Node('E', []);
// let qNode = new Node('Q', []);
// eNode.addChild(qNode);
console.log(`new Enode:`, JSON.stringify(eNode));

let fNode = new Node('F', []);
graph.children[0].addChild(eNode);
graph.children[0].addChild(fNode);
console.log(`Graph: ${JSON.stringify(graph)}`);

// add to fNode this.root.children[0].children[1]
iNode = new Node('I', []);
jNode = new Node('J', []);
graph.children[0].children[1].addChild(iNode);
graph.children[0].children[1].addChild(jNode);
// add to dNode this.root.children[2]
gNode = new Node('G', []);
hNode = new Node('H', []);
graph.children[2].addChild(gNode);
graph.children[2].addChild(hNode);
// add to gNode this.root.children[2].children[0]
kNode = new Node('K', []);
graph.children[2].children[0].addChild(kNode);
/**************************************/
// rootNode.addChild()
console.log(`Graph: ${JSON.stringify(graph)}`);
console.log(`Array of all names in the array: ${graph.depthFirstSearch([])}`);