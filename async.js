const db = require('./db')

const fetchUserById = (id, callback) => {
    setTimeout(() => {
        const results = db.users.find(i => i.id === id);
        results ?
            callback(null, results) :
            callback('Not found', null);
    }, 2000);
};

fetchUserById(1, (err, user) => {
    if (err) {
        console.log('Error:', err);
        return;
    }

    console.log('user:', user);
});