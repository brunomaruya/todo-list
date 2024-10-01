import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Input() {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Add a new task"
        className="w-full p-2 bg-transparent outline-darkPurple outline-1 outline rounded-lg "
      />
      <button className="p-2 bg-lightPurple aspect-square rounded-lg hover:bg-darkPurple">
        <PlusIcon className="w-6 " />
      </button>
    </div>
  );
}
