import "./header.css";
import { Link } from "react-router-dom";
import "./header.css"
export default function Header() {
  return (
    <header className="w-full bg-transparent px-4 py-4">
      <div className="flex justify-between w-full">
        <Link to={"/"}>
          <h1 className="header-title text-xl font-bold text-indigo-950 sm:text-2xl lg:text-4xl ">Monēre</h1>
        </Link>
        <p className="header-text text-lg text-indigo-900 sm:text-xl lg:text-2xl">
          Your Todo List
        </p>
      </div>
    </header>
  );
}
