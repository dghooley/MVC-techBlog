const { User } = require('../models');

const userData = [{
        username: 'Sarah',
        password: '123456'

    },
    {
        username: 'Jake',
        password: '789412'
    },
    {
        username: 'Joe',
        password: '1234564'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;