import Cell from "../../components/Cell/Cell";
import { useEffect, useState } from "react";
import { checkOff, getAllActiveTasks } from "../../models/Tasks";
import InfoCard from "../../components/InfoCard";
import LoadCard from "../../components/LoadCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllActiveTasks();
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
