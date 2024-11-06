function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
console.log();
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
const uniqueNumbers = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueNumbers);
console.log();
function countWordOccurrences(sentence, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
}
const sentence = "TypeScript is great. I love TypeScript!";
const word = "typescript";
const count = countWordOccurrences(sentence, word);
console.log(count);
console.log();
function calculateShapeArea(arg0) {
    return arg0.shape = "circle", arg0.radius = 5;
}
calculateShapeArea({ shape: "circle", radius: 5 });
console.log(calculateShapeArea);
