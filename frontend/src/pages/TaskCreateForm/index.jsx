/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createTask } from "../../models/Tasks/index";
import { getAllCategories } from "../../models/Categories";

export default function TaskCreateForm() {
  const [formData, setFormData] = useState({ detail: "", significance: "low" });
  const [info, setInfo] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getAllCategories();
      if (response.status === 200) {
        setCategories(response.payload);
      } else {
        setInfo(response.msg);
      }
    };
    fetchCategories();
  }, []);

  const postForm = async () => {
    const task = await createTask(formData);
    if (task.status === 201) {
      redirectToSuccessPage();
    } else {
      setInfo(task.errors);
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
    if (!formData.categoryID) {
      setInfo("Category is required!");
      return false;
    }
    if (!formData.date) {
      setInfo("Date is required!");
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
        <h3 className="text-md font-bold">Task Name</h3>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter Task Name"
          onChange={handleChange}
          className="border border-black rounded-md px-3 py-2 hover:shadow-xs shadow-indigo-200 transition"
        />
        <h3 className="text-md font-bold">Task Details</h3>

        <input
          type="text"
          name="detail"
          placeholder="Enter Task Details"
          onChange={handleChange}
          className="border border-black rounded-md px-3 py-2 hover:shadow-xs shadow-indigo-200 transition"
        />
        <h3 className="text-md font-bold">Significance</h3>

        <select
          name="significance"
          required
          onChange={handleChange}
          className="cursor-pointer border border-black rounded-md px-3 py-2 hover:shadow-xs shadow-indigo-200 transition"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <h3 className="text-md font-bold">Category</h3>

        <select
          name="categoryID"
          required
          onChange={handleChange}
          className="cursor-pointer border border-black rounded-md px-3 py-2 hover:shadow-xs shadow-indigo-200 transition"
        >
          <option value="" disabled selected>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <h3 className="text-md font-bold">Due Date</h3>

        <input
          type="date"
          name="date"
          required
          onChange={handleChange}
          className="border border-black rounded-md px-3 py-2 hover:shadow-xs shadow-indigo-200 transition"
        />
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
          Create Task
        </button>
      </div>
    </div>
  );
}
