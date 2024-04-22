import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BlogPost = () => {
    const post = useLoaderData();

    return (
        <>
            <div>Dit is een detail van een BlogPost: {post.title}</div>
            <article>
                {post.description}
            </article>
        </>
    )
}

export default BlogPost