// store an object, whose value is another list of nodes they key points at:
const adjList = {
    1: [2, 3],
    2: [],
    3: [2]
};

console.log(`Display all nodes, node one points at: ${adjList[1]} `);
console.log(`Does node 1 point to node 2?: ${adjList[1].find(connectedNode => connectedNode === 2 )}`); 

// How do we represent the node and values (connections)?
const nodes = [{id: 1, value: ['Max']}];