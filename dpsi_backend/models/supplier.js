const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Supplier = sequelize.define('Supplier', {
    supplierID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    supplierName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactName: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Supplier;