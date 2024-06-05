const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Customer = require('./customer');
const Employee = require('./employee');
const Shipper = require('./shipper');

const Order = sequelize.define('Order', {
    orderID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    customerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'customerID'
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    employeeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Employee,
            key: 'employeeID'
        }
    },
    orderDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    shipperID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Shipper,
            key: 'shipperID'
        }
    },
});

Order.belongsTo(Customer, { foreignKey: 'customerID' });
Customer.hasMany(Order, { foreignKey: 'customerID' });

Order.belongsTo(Employee, { foreignKey: 'employeeID' });
Employee.hasMany(Order, { foreignKey: 'employeeID' });

Order.belongsTo(Shipper, { foreignKey: 'shipperID' });
Shipper.hasMany(Order, { foreignKey: 'shipperID' });

module.exports = Order;