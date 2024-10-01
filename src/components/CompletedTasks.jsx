import React from "react";
import Task from "./Task";

export default function CompletedTasks() {
  return (
    <div className=" mt-16 ">
      <h1 className="mb-4">Done - {"number"}</h1>
      <div className="flex flex-col gap-2">
        <Task label="task" done={true} />
        <Task label="task" done={true} />
      </div>
    </div>
  );
}
