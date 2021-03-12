const db = require('./db')

// interval
let counter = 0;
const interval = setInterval(() => {
    (++counter) <= 5 ?
        console.log(`Callback on interval ${counter}`) :
        clearInterval(interval);
}, 1000);

// timeout
setTimeout(() => {
    console.log('Callback when timeout');
}, 6000);

// array functions
const found = db.users.find(i => i.id === 1);
const filtered = db.posts.filter(i => i.userId === 1);
const mapped = db.posts.map(i => ({ id: i.id, title: i.title }));

console.log('found:', found);
console.log('filtered:', filtered);
console.log('mapped:', mapped);

// event listener
// const button = document.querySelector('button');
// document.querySelector('button').addEventListener('click', function () {
//     console.log('Button is clicked');
// });

// fetch API
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));