// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
    // Sum or parse array items
    let sumItems = (stackItem) => {
        let { item, depth } = stackItem;
        console.log("depth:", depth, "item:", item);
        let sum = 0;
        depth++;
        // Step2: Loop through all array items
        for (let itemIdx = 0; itemIdx <= item.length - 1; itemIdx++) {

            // Step3; If subItem is not an object sum it and store on the stack
            if (typeof item[itemIdx] != 'object') {
                sum += item[itemIdx];
                console.log("SUMITEMS: != object", item[itemIdx]);
            }//if

            //Step 4: if item is object with length greater than 1, sum any non object items, and parse the rest
            else if (typeof item[itemIdx] === 'object' && item.length > 1) {
                // If program finds an object and sum has value, push sum to stack and parse object
                console.log("SUMITEMS: object length >1", item[itemIdx]);
                if (sum != 0) {
                    STACK.push({ item: sum, depth });
                    sum = 0;
                }
                // Question: You don't need to return this recursive call, because the call stack doesn't use it.
                sumItems({ item: item[itemIdx], depth: depth });
            }// else
            // Step 5: if subItem is object with one item, push the value on the stack
            else if (typeof item[itemIdx] === 'object' && item.length === 1) {
                // productSum(item[itemIdx]);
                // parseObject(item[itemIdx]);
                STACK.push({ item: item[0], depth })
            }
            console.log(`Object SUM: ${sum}; ItemLength: ${item.length}; INDEX: ${itemIdx}`);
        }//for
        // If there are left over sums not add to stack add them, and zero out the sum
        if (sum != 0) {
            STACK.push({ item: sum, depth });
            console.log
            sum = 0;
        }
    }// sumItems

    console.log("ARRAY:", array);
    /***************************
    PROGRAM ENTRY
    *****************************/
    let count = 1;
    let depth = 0;
    sumItems({ item: array, depth: depth });
    console.log("FINAL STACK:", JSON.stringify(STACK));
    let productSum = 0;
    for (let stackIdx = 0; stackIdx <= STACK.length - 1; stackIdx++) {
        productSum += STACK[stackIdx].item * STACK[stackIdx].depth;
    }
    console.log("ProductSum:", productSum);
    // sort by depth?
    let largestDepth = 0;
    let deepestObject = {};
    let highestDepthItem = STACK.forEach((object) => {
        if (object.depth > largestDepth) {
            largestDepth = object.depth;
            deepestObject = object
        }
    });
    console.log("DEEPEST:", deepestObject);
    // let depthValue= deepestObject.depth;
    let depthValue = 1;
    console.log("DEPTHVALUE:", depthValue);
    let prevStackIdx = 0;
    let sum = 0;
    let accumSum = 0;
    for (let curStackIdx = 1; curStackIdx <= STACK.length - 1; curStackIdx++) {
        console.log(`ACCUMSUM: ${accumSum}`);
        let curAndPrevStackIdxEQ = STACK[prevStackIdx].depth === STACK[curStackIdx].depth && STACK[curStackIdx].depth === depthValue;
        let prevStackIdGTCurStackIdx = STACK[prevStackIdx] && STACK[curStackIdx] && STACK[prevStackIdx].depth < STACK[curStackIdx].depth;
        if (curAndPrevStackIdxEQ) {
            while (curAndPrevStackIdxEQ && curStackIdx <= STACK.length - 2) {
                sum += STACK[prevStackIdx].item + STACK[curStackIdx].item;
                curStackIdx += 2;
                prevStackIdx += 2;
                curAndPrevStackIdxEQ = STACK[prevStackIdx].depth === STACK[curStackIdx].depth && STACK[curStackIdx].depth === depthValue;
            }
        }
        else if (prevStackIdGTCurStackIdx) {
            sum += STACK[prevStackIdx].item + STACK[curStackIdx].item * STACK[curStackIdx].depth;
            curStackIdx += 2;
            prevStackIdx += 2;

        }
        else {
            sum = STACK[prevStackIdx].item
            curStackIdx++
            prevStackIdx++;
        }
        if (sum > 0) {
            let product = sum * STACK[curStackIdx].depth;
            accumSum += sum;
            console.log("Product:", product, " AccumSum:", accumSum, " Depth:", STACK[curStackIdx].depth);
            sum = 0;
        }//if
        depthValue++;

    }//for
    // while(curStackIdx)
    return productSum;
} //function

// keep outside recursive call
const STACK = [];

// Do not edit the line below.
// exports.productSum = productSum;
let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
productSum(array);
