class TreeNode {
    // TreeNode Object = {name: 'A', children: [{name: 'B', children: []}, {name: 'C', children: []}]}
    //childNames = array of TreeNode Objects
    constructor(name = '', childNames = []) {
        this.name = name;
        //makes sure the child object is an instance of this class
        this.children = childNames.map((childName) => new TreeNode(childName, []));
    }

    addChild(node) {
        //you can add a child to an already existent node or create one
        if(!(node instanceof TreeNode)) {
            const {name, children} = node;
            node = new TreeNode(name, children);
        }
        console.log("NODE", JSON.stringify(node));
        this.children.push(node);
    }

}

//root node
const tree  = new TreeNode('A', ['B', 'C']);

//non-root nodes
const eNode = new TreeNode('E', []);
const fNode = new TreeNode('F', []);

/*************************************/

//adding children
tree.children[0].addChild({name: 'D', children: ['H']}); //non-instance
tree.children[1].addChild(eNode);  //instance of TreeNode

console.log(tree);
console.log(tree.children[0]);
console.log(tree.children[0].children[0]);