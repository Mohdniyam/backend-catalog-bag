const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

/*
 * Product model stores product information.
 * Each entry contains:
 * - name: product name
 * - description: product description
 * - price: product price
 * - stock: product stock
 * - category: product category
 * - image: product image
 * - createdAt: when this product was created
 * - updatedAt: when this product was updated
 */

const Product = sequelize.define("Product", {
    ProductId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // auto-generate UUID
        primaryKey: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true, // handles createdAt & updatedAt automatically
});

module.exports = Product;
