import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TasksContext = createContext();

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (task) => {
    setTasks([...tasks, { label: task, done: false }]);
  };

  return <TasksContext.Provider value={{}}>{children}</TasksContext.Provider>;
}

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksContextProvider");
  }

  return context;
};
