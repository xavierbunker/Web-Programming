const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if(token === 'secret123'){
        next();
    } else{
        res.status(401).send({error: 'Unauthorized'});
    }
};

module.exports = authMiddleware;