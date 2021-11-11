const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.post("/", async (req, res)=>{
    try{
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(()=>{
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;

            res.json(newUser)
        })
    }
    catch (err){
        res.status(500).json(err);
    }
})

router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({
            where: {
                username: req.body.username
            }
            
        });

        if(!user){
            res.status(400).json({message: "No account found with that username!"})
            return;
        }


        req.session.save(()=>{
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.loggedIn = true;

            res.json({user, message: "You're logged in!"})
        })
    }
    catch (err){
        res.status(500).json(err);
    }
})

module.exports = router;