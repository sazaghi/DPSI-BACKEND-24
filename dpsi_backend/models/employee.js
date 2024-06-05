const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Employee = sequelize.define('Employee', {
    employeeID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = Employee;