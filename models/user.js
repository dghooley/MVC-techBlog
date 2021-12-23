const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create User model
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// define table columns and configuration
User.init(
    {
        // id column
        id: {
            // use Sequelize DataTypes object to indicate what type of data
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicate email values
            unique: true,
            // check if value is an email address
            validate: {
                isEmail: true
            }
        },
        // password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // password must be at least 4 characters long
                len: [4]
            }
        }
    },
    {
        // table configuration options (https://sequelize.org/v5/manual/models-definition.html#configuration)

        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        // sequelize connection
        sequelize,
        // don't automatically create createdAt/updatedAt timestamps
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // user underscores instead of camel-casing
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;