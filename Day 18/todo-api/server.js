const express = require('express');
const app = express();
app.user(express.json());

//Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Pass control to the next middleware
});

let todos = [
    { id: 1, task: 'Learn Node.js', completed: false },
    { id: 2, task: 'Build a REST API', completed: false },
];

//GET all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

//GET a single todo by ID
app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).send('Todo not found');
    res.json(todo);
});

//POST a new todo
app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length,
        task: req.body.task,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

//PUT to update a todo
app.put('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo){
        todo.task = req.body.task || todo.task;
        todo.completed = req.body.completed !== undefined ? 
        req.body.completed : todo.completed;
        res.json(todo);
    } else{
        res.status(404).send('Todo not found');
    }
});

//DELETE a todo
app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).send('Todo not found');
    todos.splice(todoIndex, 1);
    res.status(204).send();
});

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
