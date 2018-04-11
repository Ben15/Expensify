

// 
// Object Destructuring
// 

// const person = {
//     age: 26,
//     location: {
//         city: 'Philidelphia',
//         temp: 92
//     }
// };

// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}.`);


// const {city, temp: temperature} = person.location
// if(city && temperature){
//     console.log(`it's ${temperature} in ${city}`);
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName + "Ben is da bomb");





// 
// Array destructuring
// 

const address=['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state ='New York', zip] = address
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00','$2.50','$2.75']
const[drink, , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice} `);

