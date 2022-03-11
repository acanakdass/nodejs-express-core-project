const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../core/loaders/db');

const ArticleModel = sequelize.define("article", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, { timestamps: false })





module.exports = ArticleModel