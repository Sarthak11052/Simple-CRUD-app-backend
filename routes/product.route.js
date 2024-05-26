const express = require("express");
const Product = require("../models/product.model")
const router = express.Router();
const { getProducts, getProduct, CreateProduct, updateProduct, DeleteProduct } = require("../controllers/product.controller.js");


router.get('/', getProducts);

router.get('/:id', getProduct);

router.post("/", CreateProduct);

router.put("/:id", updateProduct);

router.delete("/:id", DeleteProduct);



module.exports = router;

