const express = require("express")
const router = express.Router()
const upload = require("../utils/multer");
const { addProduct, getProducts } = require("../controllers/addProduct")

router.post("/addProduct", upload.single("image"), addProduct)

router.get("/getProducts", getProducts)

module.exports = router;
