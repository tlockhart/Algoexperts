const CACHE = {
    1: 0,
    2: 1
};

function getNthFib(n) {	
// n is not stored in cache
if (!CACHE.hasOwnProperty(n)) {
    // find the value, and store it on the cache
    CACHE[n] = getNthFib(n - 1) + getNthFib(n - 2);
} 
// Don't use and Else, becaue we store all values found  
// in CACHE,as it is our  data store
    console.log("cache:", CACHE);
    return CACHE[n];
}

// Do not edit the line below.
const position = 5;
console.log(`Fibonacci position: ${position}; value: ${getNthFib(position)}`);