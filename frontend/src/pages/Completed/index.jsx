import Cell from "../Dashboard/Cell";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {  getAllInactiveTasks } from "../../models/Tasks";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllInactiveTasks();
    console.log(data);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTasks(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);


  if (isLoaded === null) {
    return (
      <>
        <p>Tasks not found, please create your first task</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Tasks are loading...</p>
      </>
    );
  }

  return (
    <>
      <p>Dashboard</p>
      {tasks.map((task, index) => (
        <Cell key={index} {...task} />
      ))}
      <Link to={`/create-task`}>
        <button>Create Task</button>
      </Link>
      <Link to={`/create-category`}>
        <button>Create Category</button>
      </Link>
      <Link to={`/`}>
        <button>Active</button>
      </Link>
      <Link to={`/inactive`}>
        <button>Completed</button>
      </Link>
    </>
  );
}