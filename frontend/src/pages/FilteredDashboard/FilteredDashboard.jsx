/* eslint-disable no-unused-vars */
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTasksByCategoryID, checkOff } from "../../models/Tasks";
import Cell from "../../components/Cell/Cell";
import InfoCard from "../../components/InfoCard";
import LoadCard from "../../components/LoadCard";

export default function FilteredDashboard() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTasksByCategoryID(id);
    if (data.status === 400) return navigate("/");
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTasks(data.payload);
      setLoaded(true);
      console.log(data.payload);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  if (isLoaded === null) {
    return <InfoCard />;
  }

  if (!isLoaded) {
    return <LoadCard />;
  }

  const handleDeactivate = async (id) => {
    const response = await checkOff(id);
    if (response.status === 200) {
      setTasks(tasks.filter((task) => task._id !== id));
    } else {
      console.error(response.msg);
    }
  };

  return (
    <>
      <div className="mt-10">
        {tasks.map((task, index) => (
          <Cell
            key={index}
            {...task}
            onDeactivate={() => handleDeactivate(task._id)}
          />
        ))}
      </div>
    </>
  );
}
