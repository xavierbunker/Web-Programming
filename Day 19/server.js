//import modules
const express = require('express');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

//Apply middleware
app.use(express.json());
app.use(loggerMiddleware);

//Mount routes....
app.use('/api', apiRoutes);

//Error Handling....
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});