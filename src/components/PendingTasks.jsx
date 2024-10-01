import React from "react";
import Task from "./Task";

export default function PendingTasks() {
  return (
    <div className="mt-16 ">
      <h1 className="mb-2">Tasks to do - {"number"}</h1>
      <Task label="task" />
      <Task label="task" done={true} />
    </div>
  );
}
