const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Shipper = sequelize.define('Shipper', {
    shipperID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    shipperName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = Shipper;