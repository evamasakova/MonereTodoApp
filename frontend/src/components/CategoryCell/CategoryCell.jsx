
import { Link } from "react-router-dom";

export default function CategoryCell(props) {
  return (
    <>
    <Link to={`/category/${props._id}`}>
      <div>
        <span
          className="dashboard-cell-color-dot"
          style={{ backgroundColor: props.color }}
        />
        <p className="dashboard-cell-text">{props.name}</p>
        
      </div>
    </Link>
    </>
  );
}