const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get("/login", (req, res)=>{
    if(req.session.loggedIn){
        res.redirect("/")
        return;
    }

    res.render("login")
})

router.get("/sign-up", (req, res)=>{
    if(req.session.loggedIn){
        res.redirect("/")
        return;
    }

    res.render("sign-up")
})


module.exports = router;
