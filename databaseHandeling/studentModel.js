const {DataTypes} = require('sequelize');
const sequelize = require('./database.js');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allownull:false,
    },
    age: {
        type: DataTypes.INTEGER,
        allownull: false,
    },
    gender: {
        type: DataTypes.ENUM('male', 'female', 'other'),
        allownull: false,
    },
    rollNumber: {
        type: DataTypes.STRING,
        unique: true,
    },
    date: {
        type: DataTypes.DATEONLY,
    },
});

module.exports = Student;