function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    let isSubsequence = false;
    let count = 0;
    for(let arrayIdx = 0; arrayIdx <= array.length-1; arrayIdx++) {
        if (array[arrayIdx] === sequence[seqIdx]){
            seqIdx++;
            count++;
        }
    }
    if(count === sequence.length) {
        isSubsequence = true;
        return isSubsequence;
    }
    return isSubsequence;
}
let array = [5, 1, 22, 25, 6, -1, 8, 10];
const badSequence = [22, 1, 6, -1, 10];
const sequence = [1, 6, -1, 10];
console.log("IsValideSubsequence:", isValidSubsequence(array, sequence));