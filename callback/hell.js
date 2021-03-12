const db = require('../db')

const fetchUserById = (id, callback) => {
    setTimeout(() => {
        const results = db.source.users.find(i => i.id === id);
        results ?
            callback(null, results) :
            callback('Not found', null);
    }, 2000);
};

const fetchPostsByUserId = (userId, callback) => {
    setTimeout(() => {
        const results = db.source.posts.filter(i => i.userId === userId);
        results.length ?
            callback(null, results) :
            callback('Not found', null);
    }, 2000);
};

const fetchCommentsByPostId = (postId, callback) => {
    setTimeout(() => {
        const results = db.source.comments.filter(i => i.postId === postId);
        results.length ?
            callback(null, results) :
            callback('Not found', null);
    }, 2000);
};

const fromHell = (user) => {
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
        user.posts = posts;

        if (!user.posts.length) {
            fromHell(user);
            return;
        }

        let postCount = 1;
        const onCommentsComplete = () => postCount === user.posts.length ? fromHell(user) : postCount++;

        user.posts.forEach(post => {
            fetchCommentsByPostId(post.id, (err, comments) => {
                if (err) {
                    console.log('Error:', err);
                    return;
                }
                post.comments = comments;
                onCommentsComplete();
            })
        });
    });
});
