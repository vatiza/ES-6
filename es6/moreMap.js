const numbers = [12, 34, 23, 43, 54, 32];
const hap = numbers.map(n => n / 2);
const third = numbers.map(x => x / 3);
// console.log(hap)
// console.log(third)
const friends = ['rakibnraki', 'nahian', 'eyam435345in', 'mohib'];
const firstLetter = friends.map(friends => friends[0])
console.log(firstLetter)
const namelength = friends.map(friend => friend.length)
console.log(namelength)
const products = [
    { id: 1, name: 'laptop', price: 32423, },
    { id: 1, name: 'laptop', price: 32423, },
    { id: 1, name: 'laptop', price: 32423, },
    { id: 1, name: 'laptop', price: 32423, },{ id: 1, name: 'laptop', price: 32423, }
    
]
// const items=products.map(product=>console.log(product.name))
const items = products.map(product => product.name);
console.log(items)