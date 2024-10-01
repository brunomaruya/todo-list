import React from "react";
import Task from "./Task";

export default function PendingTasks() {
  return (
    <div className=" mt-16 ">
      <h1 className="mb-4">Tasks to do - {"number"}</h1>
      <div className="flex flex-col gap-2">
        <Task label="task" />
        <Task label="task" />
      </div>
    </div>
  );
}
