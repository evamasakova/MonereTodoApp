import CategoryCell from "../CategoryCell/CategoryCell";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useCategories } from "../../context/CategoryContext";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setLoaded] = useState(false);

  const { categories } = useCategories();

  useEffect(() => {
    setLoaded(true);
  }, [categories]);

  if (isLoaded === null) {
    return (
      <p>
        Categories not found, please create a category before creating a task.
      </p>
    );
  }
  if (!isLoaded) {
    return <p>Categories are loading...</p>;
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-screen z-40 flex transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 bg-indigo-950 text-white font-extrabold p-2 rounded-l-full shadow-md z-50"
          style={{ paddingLeft: 11 }}
        >
          {isOpen ? ">" : "<"}
        </button>

        <div className="relative sm:w-40 md:w-45 lg:w-60 h-full bg-white/60 backdrop-blur-lg shadow-lg border-l border-gray-300 p-4 pb-1 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Categories</h2>
            {categories.map((category, index) => (
              <CategoryCell key={index} {...category} />
            ))}
          </div>

          <div className="flex justify-center pb-0 mt-auto">
            <Link to="/create-category">
              <button className="cursor-pointer flex flex-col items-center gap-1 bg-transparent text-black px-4 py-2 hover:text-amber-400 transition">
                <FiPlus className="text-xl" />
                <span className="text-sm font-medium">Add Category</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
