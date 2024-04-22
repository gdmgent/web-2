import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BlogPost = () => {
    const post = useLoaderData();
    console.log(post);
    return (
        <>
            {
                Object.keys(post).length ?
                    <>
                        <div>Dit is een detail van een BlogPost: {post.title}</div>
                        <article>
                            {post.body}
                        </article>
                    </> :
                    <h2>Deze post bestaat niet.</h2>
            }
        </>
    )
}

export default BlogPost