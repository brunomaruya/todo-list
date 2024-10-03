import { CheckIcon, TrashIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { useTasks } from "../context/TasksContext";

export default function Task({ label, done = false }) {
  const { toggleTaskStatus, deleteTask } = useTasks();
  const [isChecked, setIsChecked] = useState(done);
  const handleCheckBoxChange = (e) => {
    toggleTaskStatus(label);
  };
  return (
    <div
      className={`flex justify-between items-center bg-itemBg p-5 rounded-lg ${
        done ? "text-green  line-through" : "text-lightPurple"
      } `}
    >
      <span className="cursor-pointer" onClick={() => toggleTaskStatus(label)}>
        {label}
      </span>
      <span className={`flex gap-4 items-center `}>
        <input
          type="checkbox"
          checked={isChecked}
          className="h-5 w-5 cursor-pointer  text-green focus:ring-green border-gray-300 rounded"
          onChange={(e) => handleCheckBoxChange(e)}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer"
          onClick={() => deleteTask(label)}
        />
      </span>
    </div>
  );
}
