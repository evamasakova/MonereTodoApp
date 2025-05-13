import CategoryCell from "../CategoryCell/CategoryCell";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../models/Categories";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCategories();
    console.log(data);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCategories(data.payload);
      setLoaded(true);
      console.log(data.payload);
    }
  };
  useEffect(() => {
    load();
  }, []);
  if (isLoaded === null) {
    return (
      <>
        <p>
          Categories not found, please create a category before creating a task.
        </p>
      </>
    );
  }
  if (!isLoaded) {
    return (
      <>
        <p>Categories are loading...</p>
      </>
    );
  }

  return (
    <>
      <p>Sidebar</p>
      {categories.map((category, index) => (
        <CategoryCell key={index} {...category} />
      ))}
      <Link to={`/create-category`}>
      <button>Create Category</button>
      </Link>
    </>
  );
}
