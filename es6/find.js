const numbers = [1, 2, 3, 45, 6, 7, 8, 23, 45, 67, 2, 21, 23];

const products = [
    { id: 1, name: 'laptop', price: 32423, },
    { id: 1, name: 'Phone', price: 32423, },
    { id: 1, name: 'TV', price: 32423, },
    { id: 1, name: 'CD', price: 32423, },{ id: 1, name: 'laptop', price: 32423, }
]
const fives =numbers.find(num => num % 5 === 0)
console.log(fives)