import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ROUTES from '../constants/routes'

const Blog = () => {
    const posts = useLoaderData();

    return (
        <>
            <div>Blog</div>

            <ul>
                {posts.map(post => <li key={post.id}>
                    <Link to={`${ROUTES.BLOG}/${post.id}`}>
                        {post.title}
                    </Link>
                </li>)}
            </ul>
        </>

    )
}

export default Blog