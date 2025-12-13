const express = require("express")
const router = express.Router()
const upload = require("../utils/multer");
const { addProduct, getProducts, editProduct, deleteProduct } = require("../controllers/addProduct")

router.post("/addProduct", upload.single("image"), addProduct)

router.put("/editProduct/:id", upload.single("image"), editProduct)

router.delete("/deleteProduct/:id", deleteProduct)

router.get("/getProducts", getProducts)

module.exports = router;
