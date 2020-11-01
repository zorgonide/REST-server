const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async (req,res)=> {
    try {
        const posts = await Post.find();
        res.json(posts)
        res.status(200)
    } catch (error) {
        res.json({message: error})

    }
})

router.post('/', async (req,res)=> {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost= await post.save();
        res.json(savedPost)
        res.status(200)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post);
        res.status(200)
    } catch (error) {
        res.json({message: error})
        res.status(404)
    }
})

router.delete('/:postID', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postID});
        res.json(removedPost);
        res.status(200)
    } catch (error) {
        res.json({message: error})
        res.status(404)
    }
})

router.patch('/:postID', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id: req.params.postID}, {$set: {title: req.body.title }});
        res.json(updatedPost);
        res.status(200)
    } catch (error) {
        res.json({message: error})
        res.status(404)
    }
})

module.exports = router;