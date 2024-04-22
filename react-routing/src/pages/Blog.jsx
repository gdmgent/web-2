import React from 'react';

const posts = [
    {
        id: 1,
        slug: 'post-one',
        title: 'Post One',
        description: 'This is the first post.'
    },
    {
        id: 2,
        slug: 'post-two',
        title: 'Post Two',
        description: 'This is the second post.'
    },
    {
        id: 3,
        slug: 'post-three',
        title: 'Post Three',
        description: 'This is the third post.'
    },
    {
        id: 4,
        slug: 'post-four',
        title: 'Post Four',
        description: 'This is the fourth post.'
    }
];

const Blog = () => {
    return (
        <>
            <div>Blog</div>

            <ul>
                {posts.map(post => <li key={post.id}>
                    {post.title}
                </li>)}
            </ul>
        </>

    )
}

export default Blog