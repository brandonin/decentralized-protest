import React, { lazy, useEffect, useState } from "react";

import { IPost } from './Post';
const Post = lazy(() => import('./Post'));

interface IFauna {
    data: IPost
    ts: number
    [key: string]: any
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<IFauna | []>([]);
    
    // TODO: Figure out either a websocket, pub/sub or service 
    // long polling mode in order to grab consistent data.
    useEffect(() => {
        const getPosts = async () => {
            const postsResponse = await fetch('/.netlify/functions/post');
            const posts = await postsResponse.json();    
            return setPosts(posts);
        }
        try {
            getPosts();
        } catch(err) {
            console.log('there was an error getting posts');
        }
    }, [setPosts]);

    return (
        <>
            {posts.map(({ data: post, ts }: IFauna, index) => (
                <div  key={index} style={{ marginBottom: "5%" }}>
                    <Post time={ts} {...post} />
                </div>
            ))}
        </>
    )
};

export default Posts;
