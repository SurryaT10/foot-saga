const express = require('express');
const Article = require('../models/article');
const router = express.Router();

router.get('/getAllArticles/:userId', async (req, res) => {
    try {
        const articles = await Article.getAllArticles(req.params.userId);
        res.send(articles);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.get('/getArticle', async (req, res) => {
    try {
        const article = await Article.getArticle('article_id', req.body.articleId)
        res.send(article)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

.post('/createArticle', async (req, res) => {
    try {
        const article = await Article.createArticle(req.body)
        res.send(article)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})
  
.put('/editArticle', async (req, res) => {
    try {
        let article = await Article.editArticle(req.body)
        res.send(article)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})
  
.delete('/deleteArticle', async (req, res) => {
    try {
        await Article.deleteArticle(req.body)
        res.send({success: "Breaking news: A post on this football blog has voluntarily retired. The reason? It couldn't keep up with its own awesomeness. Stay tuned for the resurrection – it's inevitable. #PostPerfectionDeparture"});
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

module.exports = router;