import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title: '', body: ''});

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }
  , []);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/posts', form)
      .then(response => {
        setPosts([...posts, response.data]);
        setForm({title: '', body: ''});
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };
  return (
    <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="body" value={form.body} onChange={handleChange} placeholder="Content" required />
        <button type="submit">Create Post</button>
      </form>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;