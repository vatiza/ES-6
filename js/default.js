// function add(first, second) {
//     console.log(first, second);
//     if (second === undefined) {
//         second = 0;
//     }
//     const total = first + second;
//     return total;
// }
// const result = add(10,);
// console.log(result);
function add(first, second=0) {
    const total = first + second;
    return total;
}
const result = add();
console.log(result);