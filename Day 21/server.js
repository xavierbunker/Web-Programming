const express = require("express");
const monogoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

//Middleware
app.use(express.json());
app.use(cors());

//MongoDB connection
monogoose.connect('mongodb://127.0.0.1"27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error('MongoDB error',err));

//Define schema and model

const postSchema = new monogoose.Schema({
  title: String,
  content: String,
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
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(500).json({message: "Falied to save post!"});
  }
});

//Start server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});