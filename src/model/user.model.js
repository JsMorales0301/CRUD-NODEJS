const { Sequelize, DataTypes } = require('sequelize');
const Connection = require('../database/connection');

const connection = new Connection();


const User = connection.sequelize.define("users", {
    id_user: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

module.exports = User;