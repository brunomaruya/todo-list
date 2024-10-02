import React from "react";
import Task from "./Task";
import { useTasks } from "../context/TasksContext";

export default function PendingTasks() {
  const { tasks } = useTasks();
  return (
    <div className=" mt-16 ">
      <h1 className="mb-4">
        Tasks to do - {tasks.filter((task) => !task.done).length}
      </h1>
      <div className="flex flex-col gap-2">
        {tasks
          .filter((task) => !task.done)
          .map((task, id) => (
            <Task key={id} label={task.label} />
          ))}
      </div>
    </div>
  );
}
