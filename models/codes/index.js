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
const sentence = "TypeScript is great. I love typeScript!";
const word = "Typescript";
const count = countWordOccurrences(sentence, word);
console.log(count);
console.log();
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.width * shape.height;
    }
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
console.log();
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 6, height: 4 });
console.log(rectangleArea);
console.log();
const person = [
    {
        name: "Alice",
        age: 30,
    }
];
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(person[0], "name"));
