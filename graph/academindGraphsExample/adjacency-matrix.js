// 2 dimensional array is an array of arrays, where each inner array represents a node.  Inside each node, we add three values to show the connection betwee the value represented by the array and the other nodes.

const adjMatrix = [
    [0, 1, 1], // connection between: 1 to 1 (0), 1 to 2 (1), 1 to 3 (1)
    [0, 0, 0], // connection between: 1 to 1 (0), 2 to 2 (0), 2 to 3 (0)
    [0, 1, 0] // connection between: 3 to 1 (0), 3 to 2 (1), 3 to 3 (0)
];
console.log(`Connection between nodes 2 and 3 is 0: ${adjMatrix[1][2]}`); //Is there a connection between node 2 and node 3check connections between node 2(row index 1) and node 3 (column index 2) will return 0

// Determine all the connections node 1 has:
console.log(`Node 1 has connections [0, 1, 1]: ${adjMatrix[0]}`);

// filter where edge is greater than 0:
console.log(`Node 1 actual connections: ${adjMatrix[0]. filter(edge => edge > 0)}`);

/* How are the node values stored? have a serperate array, where every node value in a number nodes = [1, 2, 3] or and object 
nodes = [
    {id: 1, name: 1, connections[2, 3]},
    {id: 2, name: 2, connections[]},
    {id: 3, name: 3, connections[2]}
]*/
const nodes = [{id: 1, value: 'Max'}];
