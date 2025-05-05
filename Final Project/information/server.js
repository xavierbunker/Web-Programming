const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error('MongoDB error', err));

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  githubLink: String,
  liveDemo: String,
});
const Project = mongoose.model("Project", projectSchema, "projects");

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  startDate: String,
  endDate: String,
});
const Education = mongoose.model("Education", educationSchema, "education");

const skillSchema = new mongoose.Schema({
  name: String,
});
const Skill = mongoose.model("Skill", skillSchema, "skills");

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const ContactSubmission = mongoose.model("ContactSubmission", contactSchema, "contactSubmissions");

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

app.get("/api/education", async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch education" });
  }
});

app.get("/api/skills", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch skills" });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const newSubmission = new ContactSubmission(req.body);
    await newSubmission.save();
    res.status(201).json({ message: "Message received successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to save message" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});