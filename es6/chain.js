// // const users = [{
// //     id: 1, name: 'rakib', job: 'it'
    
// // }]

// // console.log(users[0].name);

// const data = {
//     count: 500,
//     data: [
//         { id: 1, name: 'babul', job: 'doctoer' },
//         { id: 2, name: 'nahian', job: 'ict' },
//     ]
// }
// const
// console.log(data.data[0].job);
const user = {
    id: 500,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '23/A dhanmonid',
            second: 'third floor',
            third:'right-side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka',
    }
}
const userFloor = user.address.street?.second;
console.log(userFloor)