const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../core/loaders/db');


const CategoryModel = sequelize.define('category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true })

module.exports = CategoryModel