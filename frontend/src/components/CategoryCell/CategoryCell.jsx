import { Link } from "react-router-dom";

export default function CategoryCell(props) {
 return (
  <>
    <Link to={`/category/${props._id}`}>
      <div className="cursor-pointer w-full mt-2 mx-auto bg-white rounded-xl shadow-md border border-gray-200  transition-all duration-300 px-4 py-2">
        <div className="flex items-start gap-2 break-words">
          {/* Color Dot */}
          <span
            className="w-3 h-3 mt-1 rounded-full flex-shrink-0"
            style={{ backgroundColor: props.color }}
          />

          {/* Name Text - Expands vertically */}
          <h2 className="text-sm text-gray-500 font-medium whitespace-pre-wrap truncate">
            {props.name}
          </h2>
        </div>
      </div>
    </Link>
  </>
);


}
