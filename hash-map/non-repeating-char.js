function firstNonRepeatingCharacter(string) {
    // Step 1: Declare hashMap
    let hashMap = new Map();
        // Step 2: Loop through the char in string
        for ( char of string) {
            // Step 3: Store Value of current char.  If a char is not in the map, you will get unknown
            const curValue = hashMap.get(char) || 0;
            // console.log(`CurValue: ${curValue}`);
            // Step 4: Set hashmap values for char key
             if (curValue) {
                hashMap.set(char, curValue+1);
             } 
            else {
                hashMap.set(char, 1);
            } 
        }
        // console.log(`Map: ${Array.from(hashMap)}`);
        // Step 5: Loop through map, return the index value of the char with value 1
        for ( [key, value] of hashMap) {
            if (value === 1) {
                // return key;
                return string.indexOf(key)
            }
        }
        // Step 6:  If no map entry contains value 1, return -1
                return -1;
    }
    
    // Do not edit the line below.
    // exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
    let string = "abcdcaf";
    console.log("First non-repeating-char:", firstNonRepeatingCharacter(string));
    