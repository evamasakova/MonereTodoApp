import { format } from "date-fns";
import { useState } from "react";
import "./Cell.css";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Cell(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mt-2 max-w-sm mx-auto bg-white rounded-xl shadow-md/20 border border-gray-200 overflow-hidden transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-2 mb-1">
        <div className="flex items-center gap-2 ">
          <span
            className="dashboard-cell-color-dot"
            style={{ backgroundColor: props.categoryID.color }}
          />
          <h2 className="text-sm text-gray-500 font-medium ">{props.name}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-gray-700 hover:text-indigo-500 transition"
          >
            <IoIosInformationCircleOutline />
          </button>
          <button
            onClick={props.onDeactivate}
            className="text-gray-700 hover:text-green-500 transition "
          >
            <CiCircleCheck />
          </button>
        </div>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] py-4 px-6" : "grid-rows-[0fr] py-0 px-6"
        }`}
      >
        <div className="overflow-hidden">
          <h3 className="text-xl font-semibold text-center mb-2">Task info</h3>
          <p className="text-sm text-center font-medium mb-4">
            Due Date:{" "}
            <span className="font-bold">
              {format(props.date, "dd.MM.yyyy")}
            </span>
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              • <strong>Category:</strong> {props.categoryID.name}
            </li>
            <li>
              • <strong>Significance:</strong> {props.significance}
            </li>
            <li>
              • <strong>Details:</strong> {props.detail}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
