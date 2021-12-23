const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    .then(data => {
        const allPosts = data.map(post => post.get({plain: true}))
        res.render('all-posts', {
            layout: 'dashboard',
            allPosts
        })
    })
    .catch((err) => res.redirect('login'));
});

router.get('/newPost', withAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard'
    })
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne(req.params.id)
    .then(data => {
        const onePost = data.get({plain: true})
        res.render('edit-post', {
            layout: 'dashboard',
            onePost
        })
    })
    .catch((err) => res.redirect('login'));
});

module.exports = router;