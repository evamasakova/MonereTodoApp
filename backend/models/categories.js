const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  detail: { type: String, required: false },
  color: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
