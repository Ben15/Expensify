import * as firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIRBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database()

export {firebase, database as default}
 

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
    
// })


    
// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
    
    
// })



// const expenses = {
//         description: 'Food',
//         note: 'This is an expense',
//         amount: 12345,
//         createdAt: 654321
//     }

// database.ref('expenses').push(expenses)





// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());

//     const data = snapshot.val()
    
//     console.log(`${data.name} is a ${data.job.title} that works at ${data.job.company}. He is ${data.age}`);
// })


// setTimeout(() => {
//     database.ref('age').set(30)
// }, 3500)

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
    
// })


// setTimeout(() => {
//     database.ref('age').set(90)
// }, 3500)

// setTimeout(() => {
//     database.ref().off()
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(100)
// }, 10500)

// database.ref('location')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val);
    
// }).catch(() => {
//     console.log('Erroe fetching data', e);
    
// })


//  database.ref().set({
//       name: 'Ben Eblen',
//       age: 24,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Google' 
//       },
//       isSingle: false,
//       location: {
//           city: 'Adelaide',
//           state: 'South Australia'
//       }

//   }).then(() => {
//       console.log('Data is saved');  
//   }).catch((e) => {
//     console.log('This failed.', e);
//   })


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'Seattle'
// })


// database.ref('isSingle').remove()
// .then(() => {
//     console.log('isSingle has been removed')
// }).catch((e) => {
//     console.log(`Couldn't remove the attribute`, e);
    
// })
