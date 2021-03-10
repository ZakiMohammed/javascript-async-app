const db = {
    query: (name, id, callback) => {
        setTimeout(() => {
            if (['users', 'posts', 'comments'].includes(name)) {
                const results = [
                    { id: 101, value: 'Data 1' },
                    { id: 102, value: 'Data 2' },
                    { id: 103, value: 'Data 3' },
                ];
                
                callback(null, results.find(i => i.id === id)) 
            } else {
                const error = {
                    message: `Entity ${name} not found`
                };

                callback(error, null)
            }
        }, 3000);
    }
};

// db.query('users', (err, results) => {
//     if (err) {
//         console.log('Error:', err);
//         return;
//     }
//     console.log('Results:', results);
// });

console.log('Welcome to callback hell:');
db.query('users', 101, (err, results) => {
    if (err) {
        console.log('Error:', err);
        return;
    }
    console.log('Inside 1st level -', results);

    db.query('posts', 102, (err, results) => {
        if (err) {
            console.log('Error:', err);
            return;
        }
        console.log('Inside 2nd level -', results);

        db.query('comments', 103, (err, results) => {
            if (err) {
                console.log('Error:', err);
                return;
            }
            console.log('Inside 3rd level -', results);

            // till infinity...
            console.log('Inside ∞ level...');
        });
    });
});