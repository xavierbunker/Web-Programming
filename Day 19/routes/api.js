const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/public', (req, res) => {
    res.send({message: 'This is a public route'});
});

//Protected route

router.get('/private', authMiddleware, (req, res) => {
    res.send({message: 'This is a private route'});
});

router.get('/error', (req, res) => {
    const error = new Error('Something went wrong!');
    next(error);
});

module.exports = router;