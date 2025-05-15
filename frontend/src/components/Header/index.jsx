import "./header.css";
import { Link } from "react-router-dom";
import "./header.css"
export default function Header() {
  return (
    <header className="w-full bg-transparent px-4 py-4">
      <div className="flex justify-between w-full">
        <Link to={"/"}>
          <h1 className=" text-lg font-bold text-black sm:text-xl md:text-3xl lg:text-4xl ">Monēre</h1>
        </Link>
        <p className="text-lg text-black sm:text-l md:text-2xl">
          Your Todo List
        </p>
      </div>
    </header>
  );
}
