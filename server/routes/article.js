const express = require('express');
const Article = require('../models/article');
const router = express.Router();

router.get('/getArticles', (req, res) => {
    try {
        const articles = Article.getAllArticles();
        res.send(articles);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

module.exports = router;