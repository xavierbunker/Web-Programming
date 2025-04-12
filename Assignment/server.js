require("dotenv").config();
const express = require("express");
const {pool} = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

//Get all projects
app.get("/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM completed_projects");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.post("/projects", async (req, res) => {
  try{
    const {project_name, description, date_completed, technologies_used, project_url} = req.body;

    //Insert data
    const result = await pool.query(
      "INSERT INTO completed_projects (project_name, description, date_completed, technologies_used, project_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [project_name, description, date_completed, technologies_used, project_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`));