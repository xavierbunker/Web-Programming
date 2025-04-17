const express = require("express");
const monogoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

//Middleware
app.use(express.json());
app.use(cors());

//MongoDB connection
monogoose.connect('mongodb://127.0.0.1:27017/BlogDB', { // Corrected port number
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error('MongoDB error',err));

//Define schema and model

const postSchema = new monogoose.Schema({
  title: String,
  body: String, // Changed from 'content' to 'body' to match frontend
});

const Post = monogoose.model("Post", postSchema);

//Add routes
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({message: "Server error"});
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { title, body } = req.body; // Changed from 'content' to 'body'
    const newPost = new Post({ title, body });
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(500).json({message: "Failed to save post!"}); // Corrected spelling
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.put("/posts/:id", async (req, res) => {
  try {
    const { title, body } = req.body; // Changed from 'content' to 'body'
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, body }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

//Start server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});