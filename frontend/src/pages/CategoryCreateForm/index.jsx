/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCategory, getAllCategories } from "../../models/Categories";
import { useCategories } from "../../context/CategoryContext";

export default function CategoryCreateForm() {
  const [formData, setFormData] = useState({ color: "Blue" });
  const [info, setInfo] = useState("");
  const navigate = useNavigate();
  const { updateCategories } = useCategories();

  const postForm = async () => {
    const category = await createCategory(formData);
    if (category.status === 201) {
      //addToContext - category
      await updateCategories();
      redirectToSuccessPage();
    } else {
      setInfo(category.payload);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (checkInputs()) return postForm();
  };

  const checkInputs = () => {
    if (!formData.name) {
      setInfo("Name is required!");
      return false;
    }
    return true;
  };

  const redirectToSuccessPage = () => {
    return navigate(`/`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-lg p-6">
      <form className="flex flex-col space-y-4">
        <h3 className="text-md font-bold">Category Name</h3>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter Category Name"
          onChange={(e) => handleChange(e)}
          className="border border-black rounded-md px-3 py-2 hover:shadow-xs shadow-indigo-200 transition"
        />
        <h3 className="text-md font-bold">Category Details</h3>

        <input
          type="text"
          name="detail"
          placeholder="Enter Category Details"
          onChange={(e) => handleChange(e)}
          className="border border-black rounded-md px-3 py-2 hover:shadow-xs shadow-indigo-200 transition"
        />

        <h3 className="text-md font-bold">Category Color</h3>

        <select
          name="color"
          placeholder="Choose Category Color"
          required
          className="cursor-pointer border border-black rounded-md px-3 py-2 hover:shadow-xs shadow-indigo-200 transition"
          onChange={(e) => handleChange(e)}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="teal">Teal</option>
        </select>
      </form>

      {info && <p className="text-red-600 mt-3 text-sm">{info}</p>}

      <div className="mt-6 flex justify-between">
        <Link to="/">
          <button className="cursor-pointer bg-blue-100 text-black px-4 py-2 rounded-md shadow-md hover:bg-indigo-300 transition">
            Close
          </button>
        </Link>
        <button
          onClick={handlePost}
          className="cursor-pointer bg-indigo-300 text-black px-4 py-2 rounded-md shadow-md hover:bg-indigo-200 transition"
        >
          Create Category
        </button>
      </div>
    </div>
  );
}
