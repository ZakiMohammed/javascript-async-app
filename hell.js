const db = require('./db')

const fetchUserById = (id, callback) => {
    setTimeout(() => {
        const results = db.users.find(i => i.id === id);
        results ?
            callback(null, results) :
            callback('Not found', null);
    }, 2000);
};

const fetchPostsByUserId = (userId, callback) => {
    setTimeout(() => {
        const results = db.posts.filter(i => i.userId === userId);
        results.length ?
            callback(null, results) :
            callback('Not found', null);
    }, 2000);
};

const fetchCommentsByPostId = (postId, callback) => {
    setTimeout(() => {
        const results = db.comments.filter(i => i.postId === postId);
        results.length ?
            callback(null, results) :
            callback('Not found', null);
    }, 2000);
};

const userLoaded = (user) => {
    // came from callback hell
    console.log('user:', user);
};

fetchUserById(1, (err, user) => {
    if (err) {
        console.log('Error:', err);
        return;
    }

    fetchPostsByUserId(user.id, (err, posts) => {
        if (err) {
            console.log('Error:', err);
            return;
        }
        user.posts = posts.map(i => ({ id: i.id, title: i.title, comments: [] }));

        // user have not posts
        if (!user.posts.length) {
            userLoaded(user);
            return;
        }

        let postCount = 1;
        user.posts.forEach(post => {
            fetchCommentsByPostId(post.id, (err, comments) => {
                if (err) {
                    console.log('Error:', err);
                    return;
                }
                post.comments = comments.map(i => ({ id: i.id, title: i.title }));

                if (postCount === user.posts.length) {
                    userLoaded(user);
                } else {
                    postCount++;
                }
            })
        });
    });
});
