function isValidSubsequence(array, sequence) {
    let sequenceIdx = 0;
    let isSubsequence = true;
    let count = 0;
    // NOTE: THE ONLY TIME YOU NEED TO MOVE THE SEQUENCE, IS WHEN YOU
    // FIND AN MATCH.  NO NESTED FOR LOOP IS NECESSARY.
    //loop through the main source of truth:
    for (let arrayIdx = 0; arrayIdx <= array.length - 1; arrayIdx++) {
        //compare the array index with each sequence
        for (let seqIdx = 0; seqIdx <= sequence.length - 1; seqIdx++) {
            //  There is no way of telling if the sequence array is a subsequence, because sequence may not match array one to one. instead count the number of elements is sequence and compare with the count
            if (sequence[seqIdx] === array[arrayIdx]) {
                count += 1;
                // break the loop, and go to the next arrayIdx
                break;
            }

        }//for
    }// for
    if (count === sequence.length) {
        isSubsequence = true;
        return isSubsequence;
    }
}
let array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
console.log("IsValideSubsequence:", isValidSubsequence(array, sequence));