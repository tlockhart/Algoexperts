let ascii = 'a'.charCodeAt(0); // 97
let char = String.fromCharCode(ascii, ascii, ascii); // 'a'
let string = 'abcd';

console.log(`The char at index 0 ('a') converted to ASCII Int: ${ascii}`);
console.log(`Return the string equivalent to integer values converted back to ASCCI chars: ${char}`);
console.log("string:", string);
console.log("StringArray1 (Array.from):", Array.from(string));
let splitArray = string.split('');
console.log("StringArray2: (split)", splitArray);
console.log("StringArray3: (spread operator)", [...string]);
console.log("JoinedString:", splitArray.join());