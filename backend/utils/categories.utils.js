import Category from "../models/categories.js";
import mongoose from "mongoose";

export const validateIfCategoriesEmpty = (categories) => {
  if (categories && categories.length !== 0) return true;
};
export const validateIfCategoryExists = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return false;

  const category = await Category.findById(id);
  return !!category;
};

export const validateCategoryInput = (data) => {
  const errors = [];

  if (
    typeof data.name !== "string" ||
    data.name.trim().length < 2 ||
    data.name.trim().length > 64
  ) {
    errors.push(
      'Field "name" is required and minimum and maximum length is 2 and 64 characters respectively.'
    );
  }

  if (data.detail !== undefined) {
    if (typeof data.detail !== "string" || data.detail.length > 250) {
      errors.push(
        'Field "detail", if provided, must be a string with a maximum length of 250 characters.'
      );
    }
  }
  
  const allowedColors = [
    "blue",
    "red",
    "green",
    "pink",
    "yellow",
    "orange",
    "teal",
  ];
  if (
    typeof data.color !== "string" ||
    !allowedColors.includes(data.color.toLowerCase())
  ) {
    errors.push(
      'Field "color" must be one of these choices: "Blue", "Red", "Green", "Pink", "Yellow", "Orange" or "Teal".'
    );
  }

  return errors;
};
