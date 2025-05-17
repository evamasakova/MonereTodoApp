import { format } from "date-fns";
import { useState } from "react";
import "./Cell.css";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function Cell(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mt-2 max-w-sm mx-auto bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 py-3 mb-1">
        <div className="flex items-center gap-2 break-words">
          <span
            className="dashboard-cell-color-dot"
            style={{ backgroundColor: props.categoryID.color }}
          />
          <h2 className="whitespace-pre-wrap text-sm text-gray-500 font-medium max-w-60 truncate">
            {props.name}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="cursor-pointer text-gray-700 hover:text-indigo-500 transition"
          >
            <IoIosInformationCircleOutline size={20} />
          </button>
          <button
            onClick={props.onDeactivate}
            className="cursor-pointer text-gray-700 hover:text-green-500 transition"
          >
            <CiCircleCheck size={20} />
          </button>
        </div>
      </div>

      {/* Collapsible Section */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          open ? "max-h-[500px] py-4 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <div>
          <h3 className="text-xl font-semibold text-center mb-2">Task info</h3>

          <p className="text-sm text-center font-medium mb-4">
            Due Date:{" "}
            <span className="font-bold">
              {format(props.date, "dd.MM.yyyy")}
            </span>
          </p>

          <ul className="text-sm text-gray-700 space-y-2 break-words">
            <li>
              • <strong>Category:</strong> {props.categoryID.name}
            </li>
            <li>
              • <strong>Significance:</strong> {props.significance}
            </li>
            <li>
              • <strong>Details:</strong>{" "}
              <span className="whitespace-pre-wrap">{props.detail}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
