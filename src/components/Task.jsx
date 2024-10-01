import { CheckIcon, TrashIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Task({ label, done = false }) {
  return (
    <div
      className={`flex justify-between items-center bg-itemBg p-5 rounded-lg ${
        done ? "text-green  line-through" : "text-lightPurple"
      } `}
    >
      <span className="cursor-pointer">{label}</span>
      <span className={`gap-4 items-center ${done ? "hidden" : "flex"}`}>
        <CheckIcon className="h-5 w-5 cursor-pointer" />
        <TrashIcon className="h-5 w-5 cursor-pointer" />
      </span>
    </div>
  );
}
