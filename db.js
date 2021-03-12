const source = {
    users: [
        { id: 1, name: 'Allen' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Martin' },
    ],
    posts: [
        { id: 101, userId: 1, title: 'Nisi sint cillum officia laborum consequat labore.' },
        { id: 102, userId: 1, title: 'Ipsum ea fugiat velit do.' },
        { id: 103, userId: 2, title: 'Qui ullamco veniam non sit mollit.' },
        { id: 104, userId: 3, title: 'Laboris qui officia anim proident Lorem esse aliquip.' },
    ],
    comments: [
        { id: 11, postId: 101, userId: 2, comment: 'Nulla tempor nisi dolor velit id qui culpa et tempor eiusmod sint.' },
        { id: 12, postId: 101, userId: 1, comment: 'Reprehenderit est cupidatat magna eu anim.' },
        { id: 13, postId: 102, userId: 3, comment: 'Sint adipisicing sint ad cillum ipsum aute voluptate ea fugiat nostrud ut.' },
        { id: 14, postId: 103, userId: 1, comment: 'Mollit id ipsum sunt laborum duis.' },
        { id: 15, postId: 101, userId: 3, comment: 'Exercitation ipsum pariatur sit Lorem deserunt occaecat.' },
    ]
}

module.exports = {
    source
};
