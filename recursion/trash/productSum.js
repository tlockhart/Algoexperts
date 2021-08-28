// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
    // Write your code here.
  let parseObject=(item) => {
          console.log(`ITEM: ${item}; TYPE: ${typeof item}`);
      
          if ( typeof item === "object" && item.length >1) {
              console.log("OBJECT length greater than 1", item)
              
              /****************/
              // sum items that need to be summed
              sumItems(item);
              /******************/
          }//else if
          else if (typeof item != "object") {
              STACK.push(item);
          }//else if
      // If object is one item push to the stack
          else if (typeof item === "object"  && item.length === 1) {
          STACK.push(item[0])
          }
  }
  
  // Sum or parse array items
  let sumItems = (item) => {
          let sum = 0;
      // Step2: Loop through all array items
          for (let itemIdx = 0; itemIdx <= item.length-1; itemIdx++) {
              
   // Step3; If subItem is not an object sum it and store on the stack
               if (typeof item[itemIdx] != 'object') {
                          sum += item[itemIdx];
                       console.log("SUMITEMS: != object", item[itemIdx]);
                  }//if
              
              //Step 4: if item is object with lengeth greater than 1, sum any non object items, and parse the rest
                  else if (typeof item[itemIdx] === 'object' && item.length >1) {
                      // you must return the recursive call so the contents are added to the call stack
                      // return productSum(item[itemIdx]);
                      console.log("SUMITEMS: object length >1", item[itemIdx]);
                      
                      // Question: You don't need to return this recursive call, because the call stack doesn't use it.
                      sumItems(item[itemIdx]);
                  }// else
              // Step 5: if subItem is object with one item, parse the object
              else if(typeof item[itemIdx] === 'object' && item.length === 1) {
                  // productSum(item[itemIdx]);
                //   parseObject(item[itemIdx]);
                sumItems(item[itemIdx]);
              }
                  console.log(`Object SUM: ${sum}; ItemLength: ${item.length}; INDEX: ${itemIdx}`);
              }//for
          
              STACK.push(sum);
      }// sumItems
  
      console.log("ARRAY:", array);
      /***************************
      PROGRAM ENTRY
      *****************************/
          sumItems(array);
      console.log("FINAL STACK:", STACK);
  } //function
  
  // keep outside recursive call
      const STACK = [];
  
  // Do not edit the line below.
//   exports.productSum = productSum;
let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
productSum(array);
  