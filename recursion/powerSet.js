function powerset(array) {
    // Write your code here.
      let reVal = [];
      powersetHelper(0, array, [], reVal);
      return reVal;
  }
  
  function powersetHelper(index, array, currentValue, reVal) {
      if (index === array.length) {
          reVal.push([...currentValue]);
          return;
      }
      
      // Recurse to the left
      powersetHelper(index + 1, array, currentValue, reVal);
      
      //Recurse to the right
      currentValue.push(array[index]);
      powersetHelper(index + 1, array, currentValue, reVal);
      currentValue.pop();
  }
  
  let array = [[],[1],[2],[3,[1,2],[1,3],[2,3],[1,2,3]]];
  console.log(`Powerset: ${JSON.stringify(powerset(array))} EQ [[],[3],[2],[2, 3],[1],[1, 3],[1, 2],[1,2, 3]]`);