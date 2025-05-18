import Cell from "../../components/Cell/Cell";
import { useEffect, useState } from "react";
import { getAllInactiveTasks } from "../../models/Tasks";
import InfoCard from "../../components/InfoCard";
import LoadCard from "../../components/LoadCard";
export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllInactiveTasks();
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
    return (
     <LoadCard/>
    );
  }

  return (
    <>
      {tasks.map((task, index) => (
        <Cell key={index} {...task} />
      ))}
    </>
  );
}
