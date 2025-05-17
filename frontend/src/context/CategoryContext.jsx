/* eslint-disable no-unused-vars */
// CategoryContext.js
import { createContext, useState, useContext, useEffect } from "react";
import { getAllCategories } from "../models/Categories";
const CategoryContext = createContext();

export const useCategories = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const updateCategories = async () => {
    await fetchCategories();
  };

  const fetchCategories = async () => {
    const response = await getAllCategories();
    if (response.status === 200) return setCategories(response.payload);
    if (response.status === 404) return setCategories([]);
  };

  //v kontextu ziskat categorie z databaze a vypsat do sidebaru
  //fetch categories from db and setCategories
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, updateCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
