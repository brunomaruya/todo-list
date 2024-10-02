import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TasksContext = createContext();

export default function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (label) => {
    setTasks([...tasks, { label: label, done: false }]);
  };
  const toggleTaskStatus = (label) => {
    const newTasks = tasks.map((task) => {
      if (task.label === label) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (label) => {
    const newTasks = tasks.filter((task) => task.label !== label);
    setTasks(newTasks);
  };

  return (
    <TasksContext.Provider
      value={{ addTask, tasks, toggleTaskStatus, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksContextProvider");
  }

  return context;
};
