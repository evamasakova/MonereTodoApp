/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createTask } from "../../models/Tasks/index";
import { getAllCategories } from "../../models/Categories";

export default function TaskCreateForm() {
  const [formData, setFormData] = useState({detail: "", significance: "low"});
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
      <h1>Task Create Form</h1>
      <form>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter Task name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="detail"
          placeholder="Enter Task details"
          onChange={(e) => handleChange(e)}
        />
        <select
          name="significance"
          placeholder="Choose Significance"
          required
          onChange={(e) => handleChange(e)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          name="categoryID"
          placeholder="Choose Category"
          required
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          required
          placeholder="Choose Due Date"
          onChange={(e) => handleChange(e)}
        />
        
      </form>
      {info && <p style={{color: "red"}}>{info}</p>}
      <button onClick={handlePost}>Create Task</button>
      <Link to={"/"}>
        <button>Cancel</button>
      </Link>
    </>
  );
}
