import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Footer() {
  return (
    <div className="w-full flex justify-center">
      <footer className="w-full px-4 py-1 sm:w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-2xl/40">
        <div className="relative flex justify-center items-end">
          {/* Active Button */}
          <Link to="/">
            <div className="flex flex-col items-center bg-white text-black rounded-xl px-6 py-2 w-30 mx-10 hover:text-amber-400">
              <span className="text-lg">
                <RxHamburgerMenu />
              </span>
              <span className="text-sm font-medium">Active</span>
            </div>
          </Link>

          {/* Plus Button */}
          <Link to="/create-task">
            <button className="font-bold absolute -top-9.5 left-1/2 -translate-x-1/2 bg-indigo-950 shadow-lg/90 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl text-3xl hover:bg-purple-700 transition">
              +
            </button>
          </Link>

          {/* Completed Button */}
          <Link to="/inactive">
            <div className="flex flex-col items-center bg-white text-black rounded-xl px-6 py-2 w-30 mx-10  hover:text-amber-400 transition">
              <span className="text-lg">
                <FaCheck />
              </span>
              <span className="text-sm font-medium">Completed</span>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
