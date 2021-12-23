const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth")

router.get("/", withAuth, (req, res) => {
    Comment.findAll({
        include: [{
            model: User,
            attributes: ['name']
        }]
        })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

router.get("/:id", withAuth, (req, res) => {
    const requestedId = req.params.id;
    Comment.findOne({
        include: [{
            model: User,
            attributes: ['name']
        }],
        where: {
            id: requestedId
        }
    })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/", withAuth, (req, res) => {
    Comment.create({
        content: req.body.content,
        user_id: req.session.user_id
    })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.put("/:id", withAuth, (req, res) => {
    Comment.update(
        {
            content: req.body.content 
        },
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        }
    )
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.delete("/:id", withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id,
            user_id: req.session.user_id
        }
    })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;