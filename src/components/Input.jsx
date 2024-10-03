import { PlusIcon } from "@heroicons/react/16/solid";
import React, { useContext, useState } from "react";
import { useTasks } from "../context/TasksContext";

export default function Input() {
  const [newTask, setNewTask] = useState("");
  const [taskExists, setTaskExists] = useState(false);
  const { addTask, tasks } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() && !taskExists) {
      addTask(newTask);
      setNewTask("");
    }
  };

  const checkIfExists = (e) => {
    return tasks.some((task) => task.label === e.target.value.trim());
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
    setTaskExists(checkIfExists(e));
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          value={newTask}
          onChange={(e) => handleInputChange(e)}
          type="text"
          placeholder="Add a new task"
          className="w-full p-2 bg-transparent outline-darkPurple outline-1 outline rounded-lg "
        />
        <button
          type="submit"
          className="p-2 bg-lightPurple aspect-square rounded-lg hover:bg-darkPurple"
        >
          <PlusIcon className="w-6 " />
        </button>
      </form>
      <div className="text-red-500">
        {taskExists ? "Task already exists" : ""}
      </div>
    </>
  );
}
