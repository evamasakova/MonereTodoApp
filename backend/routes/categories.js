const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories");

/**
 * Endpoint routes for categories.
 */
router.get("/list", categoriesController.getAllCategories);
router.post("/create-category", categoriesController.createCategory);
router.get("/:id", categoriesController.getCategoryById);

module.exports = router;
