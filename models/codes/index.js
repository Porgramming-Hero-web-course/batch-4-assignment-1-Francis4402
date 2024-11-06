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