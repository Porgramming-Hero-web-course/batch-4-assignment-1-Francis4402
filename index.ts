
function sumArray(arr: Array<number>): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const result = sumArray([1,2,3,4,5]);

console.log(result);
console.log();

function removeDuplicates(arr: Array<number>) : Array<number> {
    return Array.from(new Set(arr));
}

const uniqueNumbers = removeDuplicates([1,2,2,3,4,4,5]);
console.log(uniqueNumbers);
console.log();

function countWordOccurrences(sentence: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
}

const sentence = "TypeScript is great. I love typeScript!"
const word = "Typescript";
const count = countWordOccurrences(sentence, word);
console.log(count);
console.log();

type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

function calculateShapeArea(shape: Circle | Rectangle): number {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.width * shape.height;
    }
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
console.log();

const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 6, height: 4 });
console.log(rectangleArea);
console.log();

type GenericArray<T> = Array<T>;

const person: GenericArray<{name: string, age: number}> = [
    {
        name: "Alice",
        age: 30,
    }
];

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getProperty(person[0], "name"));
console.log();

