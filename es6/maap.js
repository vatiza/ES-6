const numbers = [2, 34, 5, 6, 7, 8, 3];
const output = [];
for (const number of numbers) {
    const double = number * 2;
    output.push(double);
}
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = doubleIt (number);
        output.push(double);
    }
    return output;
}
// function doubleIt(number) {
//     return number * 2;
// }
// const dounleIt = num => num* 2;

// const result = getDoubles(numbers)
// console.log(result);
const fiveTime = [1, 2, 3, 4,5].map(x => x % 2);
console.log(fiveTime)