const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'ashu@2001',
    database: 'studentTable'
});
module.exports = sequelize;