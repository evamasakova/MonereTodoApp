const CategoryUtil = require("../utils/categories.utils");
const CategoryDAO = require("../dao/categories.dao");

exports.getAllCategories = async (req, res, next) => {
  const categories = await new CategoryDAO().getAllCategories();
  if (CategoryUtil.validateIfCategoriesEmpty(categories)) {
    return res.status(200).send({
      msg: "Categories found!",
      payload: categories,
    });
  }
  res.status(404).send({ msg: "Categories not found" });
};

exports.createCategory = async (req, res, next) => {
  const validationFailed = CategoryUtil.validateCategoryInput(req.body);
  if (validationFailed.length > 0) {
    return res.status(400).send({
      msg: "Bad input!",
      payload: validationFailed,
    });
  }
  const data = await new CategoryDAO().createCategory(req.body);
  return res.status(201).send({
    msg: "Category created!",
    payload: data,
  });
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const data = await new CategoryDAO().getCategoryById(req.params.id);
    if (data) {
      return res.status(200).send({
        msg: "Category found!",
        payload: data,
      })
    }
    res.status(404).send({ msg: "Category not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};
