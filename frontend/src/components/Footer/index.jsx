import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <p>Footer</p>
      <Link to={`/`}>
        <button>Active</button>
      </Link>

      <Link to={`/create-task`}>
        <button>Create Task</button>
      </Link>

      <Link to={`/inactive`}>
        <button>Completed</button>
      </Link>
    </>
  );
}
