import React, { useState } from "react";

const NewPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs, add more validation logic as needed

    const newPost = {
      title,
      body,
    };

    // Call the onAddPost function from the parent component
    onAddPost(newPost);

    // Clear the form fields after submission
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Body:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default NewPostForm;
