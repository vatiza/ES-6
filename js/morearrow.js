//! arrow function

const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;
const result = multiply(7, 8);
console.log(result);

const addAll (a, b, c, d, e, ) => a + b + c + d + e;
//! no parameter arrow function
const getPie = () => 3.14;
//! one parameter
const daubleI = (num) => num * 2;

//! one parameter simple version
const faiveTime = num => num * 5;

//! multiline arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyresult = firstSum * secondSum;
    const result = multiplyresult / 2;
    return result;
}