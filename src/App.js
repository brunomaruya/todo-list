import "./App.css";
import CompletedTasks from "./components/CompletedTasks";
import Input from "./components/Input";
import PendingTasks from "./components/PendingTasks";

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-bg  text-text">
      <div className="container w-5/12 h-5/6 p-16 bg-containerBg  rounded-lg shadow-2xl ">
        <Input />
        <PendingTasks />
        <CompletedTasks />
      </div>
    </div>
  );
}

export default App;
