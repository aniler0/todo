import React, { Suspense } from "react";
import "../components/Task/task.css";
import "../components/TaskList/task-list.css";

const Completed = ({ setTasks, tasks }) => {
  const CompletedTasks = React.lazy(() =>
    import("../components/CompletedTasks/CompletedTasks")
  );
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CompletedTasks setTasks={setTasks} tasks={tasks} />
      </Suspense>
    </>
  );
};

export default Completed;
