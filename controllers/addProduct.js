const Product = require("../models/Product.js");

exports.addProduct = async (req, res) => {
    try {
        console.log("File:", req.file);

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

        const { name, description, price, stock, category } = req.body;

        const product = await Product.create({
            name,
            description,
            price,
            stock,
            category,
            image: imageUrl,  // <-- save full url
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.status(201).json({
            message: "Product added successfully",
            product,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding product" });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching products" });
    }
};
