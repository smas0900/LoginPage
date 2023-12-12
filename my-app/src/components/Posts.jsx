import React, { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./Comments";
import NewPostForm from "./NewPostForm";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API endpoint
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const handleDeletePost = async (postId) => {
    // Implement logic to delete the post on the server
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      <h2>All Posts</h2>
      <NewPostForm onAddPost={handleAddPost} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            {/* Add an edit button and functionality as needed */}
            <Comments postId={post.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
