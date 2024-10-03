import { CheckIcon, TrashIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { useTasks } from "../context/TasksContext";
import Checkbox from "@mui/material/Checkbox";
import { colors } from "../styles/colors";

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
        <Checkbox
          checked={isChecked}
          className="h-5 w-5 cursor-pointer   "
          onChange={(e) => handleCheckBoxChange(e)}
          sx={{
            color: colors.lightPurple, // Cor da borda quando desmarcado
            "&.Mui-checked": {
              color: colors.green, // Cor quando marcado
            },
          }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer"
          onClick={() => deleteTask(label)}
        />
      </span>
    </div>
  );
}
