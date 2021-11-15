const { User } = require('../models');

const userData = [{
        username: 'Juan',
        email: 'juan@email.com',
        password: '123456'

    },
    {
        username: 'Christina',
        email: 'tina@email.com',
        password: '789412'
    },
    {
        username: 'Jaime',
        email: 'jaime@email.com',
        password: '1234564'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;