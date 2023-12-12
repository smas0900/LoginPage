import React, { useState } from "react";
import axios from "axios";

const NewPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddPost = async () => {
    // Implement logic to send the new post data to the server
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title,
        body: content,
        userId: 1, // Assuming a static user ID for demonstration purposes
      }
    );

    const newPost = response.data;
    onAddPost(newPost);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3>Create a New Post</h3>
      <form onSubmit={handleAddPost}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewPostForm;
