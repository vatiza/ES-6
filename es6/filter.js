const numbers = [1, 2, 3, 45, 6, 7, 8, 23, 45, 67, 2, 21, 23];
const bigNum = numbers.filter(number => number > 20);
const tiny = numbers.filter(num => num < 10);
console.log(tiny)