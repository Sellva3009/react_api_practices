import React, { useState, useEffect } from 'react';

// https://jsonplaceholder.typicode.com/posts

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch("https://jsonplaceholder.typicode.com/posts", { signal })
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
                // console.log(data);
            })
            .catch(err => {
                if( err.name !== 'AbortError') {
                    console.error('Fetch error:', err);
                }
            })

        return () => {
            abortController.abort();
        };
    }, []);

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map(({id, title, body}) => (
            <li key={id}>
                <h1>{title}</h1>
                <p>{body}</p>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts