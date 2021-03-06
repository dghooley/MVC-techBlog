const { Comment } = require('../models');

const commentData = [{
        comment_text: "Random comment number one",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Random comment number two",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Random comment number three",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

module.exports = seedComments;