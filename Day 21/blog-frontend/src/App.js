import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title: '', body: ''});
  const [editingPostId, setEditingPostId] = useState(null); // Track which post is being edited

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('http://localhost:5000/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPostId) {
      // Update existing post
      axios.put(`http://localhost:5000/posts/${editingPostId}`, form)
        .then(response => {
          setPosts(posts.map(post => post._id === editingPostId ? response.data : post));
          setForm({title: '', body: ''});
          setEditingPostId(null);
        })
        .catch(error => {
          console.error('Error updating post:', error);
        });
    } else {
      // Create new post
      axios.post('http://localhost:5000/posts', form)
        .then(response => {
          setPosts([...posts, response.data]);
          setForm({title: '', body: ''});
        })
        .catch(error => {
          console.error('Error creating post:', error);
        });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        setPosts(posts.filter(post => post._id !== id));
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  const handleEdit = (post) => {
    setEditingPostId(post._id);
    setForm({ title: post.title, body: post.body });
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
    setForm({ title: '', body: '' });
  };

  return (
    <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <textarea name="body" value={form.body} onChange={handleChange} placeholder="Content" required />
        <button type="submit">{editingPostId ? 'Update Post' : 'Create Post'}</button>
        {editingPostId && <button type="button" onClick={handleCancelEdit}>Cancel Edit</button>}
      </form>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;