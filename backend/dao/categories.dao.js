const { default: mongoose } = require("mongoose");
const Category = require("../models/categories");

class CategoryDAO {
  constructor() {
    this.model = Category;
  }
  /**
   * Returns an array of all categories.
   *
   * @returns All categories.
   */
  async getAllCategories() {
    try {
      return await Category.find().select("-__v");
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
   * Creates a new category.
   *
   * @param {Object} data Request data from client.
   * @returns Newly created category.
   */
  async createCategory(data) {
    try {
      const foo = new Category({
        name: data.name,
        detail: data.detail,
        color: data.color,
      });
      return await foo.save();
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
   * Creates a new category and saves it to the database.
   *
   * @param {mongoose.Types.ObjectId} id The unique indentifier of each category.
   * @returns Category with the matching id.
   */
  async getCategoryById(id) {
    try {
      return await Category.findById(id).select("-__v");
    } catch (error) {
      throw new Error(error);
    }
  }
  /**
   * Returns a map of categories with their IDs as keys.
   *
   * @returns {Object} A map of categories.
   */
  async getCategoryMap() {
    try {
      const categories = await this.getAllCategories();
      const categoryMap = {};
      categories.forEach((category) => {
        categoryMap[category._id] = category;
      });
      return categoryMap;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CategoryDAO;
