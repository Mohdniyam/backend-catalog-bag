require('dotenv').config();
const express = require('express');
const cors = require('cors');
const addProduct = require('./routes/addProduct.js');
const sequelize = require("./config/db.js"); //  <-- IMPORTANT (if using ES modules)

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Test DB Connection BEFORE routes
sequelize.authenticate()
    .then(() => {
        console.log("✅ Database connected");
        return sequelize.sync({ alter: true }); // create tables
    })
    .then(() => console.log("📦 All models synchronized"))
    .catch((err) => console.error("❌ DB error:", err));


// Load Routes
app.use('/api/v1/admin', addProduct);

// Home route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
