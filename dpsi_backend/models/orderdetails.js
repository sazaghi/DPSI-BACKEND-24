const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Order = require('./order'); // Impor model Category
const Product = require('./product');

const OrderDetails = sequelize.define('OrderDetails', {
    orderDetailID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    orderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: 'orderID'
        }
    },
    productID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'productID'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

// Definisikan relasi antara Product dan Category
OrderDetails.belongsTo(Order, { foreignKey: 'orderID' });
Order.hasMany(OrderDetails, { foreignKey: 'orderID' });

OrderDetails.belongsTo(Product, { foreignKey: 'productID' });
Product.hasMany(OrderDetails, { foreignKey: 'productID' });

module.exports = OrderDetails;