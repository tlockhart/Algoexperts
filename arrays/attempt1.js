function isValidSubsequence(array, sequence) {
    // Edge case
    if (sequence.length > array.length) {
        return false;
    }
    else if (sequence.length === 1 && array.includes(sequence[0])) {
        return true;
    }

    // Step 1: Set defaults:
    let endArrayIdx = array.length - 1;
    let isSubsequence = true;
    let arrayIdxMap = [];
    let potentialSubSeqMatchIdx = 0;

    // Step 2: Loop through the array, as it is the main source of truth;
    for (let curArrayIdx = 0; curArrayIdx <= endArrayIdx; curArrayIdx++) {
        // Step 3: compare each element in the array to each potential match in the sequence array
        let curArrayVal = array[curArrayIdx];
        // Step 4: Search for the array element in a section of sequence that has not been searched
        let seqItemMatchIdx = findNewSeqSearchPosition(potentialSubSeqMatchIdx, sequence, curArrayVal);
        /* Step 5: If seqItemMatchIdx is found, set potentialSubSeqMatchIdx to the position after seqItemMatchIdx, so we do not get duplicate positions.  Push all array indexes that match the
        value found in sequence into an idxMap array*/
        if (seqItemMatchIdx > -1) {
            console.log(`Array: ${array}; sequence: ${sequence}; Sequence: ${sequence[seqItemMatchIdx]} SequenceFoundItemIdx: ${seqItemMatchIdx}, arrayIdx: ${array.indexOf(sequence[seqItemMatchIdx])}`);
            potentialSubSeqMatchIdx = seqItemMatchIdx + 1;
            arrayIdxMap.push(array.indexOf(sequence[seqItemMatchIdx]));
        }
    }// for

    // Step 6: Compare the length of the ArrayIdxmap to the sequence length
    if (arrayIdxMap.length === sequence.length) {
        // Step 7: Compare the order of the array idx to make sure they are in sequential order in Array
        let prevMapIdx = 0;
        for (let curMapIdx = 1; curMapIdx <= arrayIdxMap.length - 1; curMapIdx++) {
            if (arrayIdxMap[prevMapIdx] > arrayIdxMap[curMapIdx]) {
                console.log(`A) Sequence: ${sequence}; Map: ${arrayIdxMap}; SeqPrevIdx: ${arrayIdxMap[prevMapIdx]} < SeqCurIdx: ${arrayIdxMap[curMapIdx]}`);
                isSubsequence = false;
                return isSubsequence;
            }
            prevMapIdx += 1;
        }// for
    }
    else {
        console.log(`B) Array: ${array}; Sequence: ${sequence}; Map: ${arrayIdxMap}}`);
        isSubsequence = false;
    }
    return isSubsequence;
}

function findNewSeqSearchPosition(potentialSubSeqMatchIdx, sequence, curArrayVal) {
    // linear search
    for (let curSeqIdx = potentialSubSeqMatchIdx; curSeqIdx <= sequence.length - 1; curSeqIdx++) {
        console.log(`potentialSubSeqMatchIdx: ${potentialSubSeqMatchIdx}; curSeqIdx: ${curSeqIdx}; sequence: ${sequence}; curArrayVal: ${curArrayVal}`)
        if (sequence[curSeqIdx] === curArrayVal) {
            return curSeqIdx;
        }
    }
    return -1;
}
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
