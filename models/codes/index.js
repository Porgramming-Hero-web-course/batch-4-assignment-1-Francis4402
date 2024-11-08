//problem 1

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
console.log();

//problem 2

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
const uniqueNumbers = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueNumbers);
console.log();

//problem 3

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

//problem 4

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

//problem 5

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
console.log();

//problem 6

function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates);
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
console.log();

//problem 7

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
console.log();

//problem 8

function validateKeys(obj, keys) {
    return keys.every(key => key in obj);
}
console.log(validateKeys(person[0], ["name", "age"]));
console.log();
