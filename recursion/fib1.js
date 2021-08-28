function getNthFib(position) {
    // Write your code here.
      //Base Case
      if (position ===1 || position === 2) {
          return position - 1
      }
      // n = 10
      // getNthFib(9) + getNthFib(8)
      // getNthFib(8) + getNthFib(7) + getNthFib(7) + getNthFib(6)
      // we keep recalculating things N times!!!!!
      // we can  memoize the calculation by creating an object where we store the n as the key and the drived value
      //{1: 0, 2:1}
      
      //recursive call
          return getNthFib(position -1) + getNthFib(position - 2);
  }
  
  // Do not edit the line below.
  const position = 5;
  console.log(`Fibonacci position: ${position}; value: ${getNthFib(position)}`);
  