/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCategory, getAllCategories } from "../../models/Categories/index";

export default function CategoryCreateForm() {
  const [formData, setFormData] = useState({ color: "Blue" });
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
    const task = await createCategory(formData);
    if (task.status === 201) {
      redirectToSuccessPage();
    } else {
      setInfo(task.payload);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = () => {
    return navigate(`/`);
  };

  return (
    <>
      <h1>Category Create Form</h1>
      <form>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter Category name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="detail"
          placeholder="Enter Category details"
          onChange={(e) => handleChange(e)}
        />
        <select
          name="color"
          placeholder="Choose Category Color"
          required
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
      {info && <p style={{ color: "red" }}>{info}</p>}
      <button onClick={handlePost}>Create Category</button>
      <Link to={"/"}>
        <button>Cancel</button>
      </Link>
    </>
  );
}
