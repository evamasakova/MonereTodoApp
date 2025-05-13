import "./Cell.css";
import { Link } from "react-router-dom";

export default function Cell(props) {
  return (
    <>
      <Link to={`/task/${props._id}`}>
        <div>
          <span
            className="dashboard-cell-color-dot"
            style={{ backgroundColor: props.categoryID.color }}
          />
          <p className="dashboard-cell-text">{props.name}</p>
        </div>
      </Link>
      <span className="dashboard-cell-checkbox" onClick={props.onDeactivate} />
    </>
  );
}
