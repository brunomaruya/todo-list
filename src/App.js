import { PlusIcon } from "@heroicons/react/16/solid";
import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="flex justify-center w-screen h-screen bg-bg text-text">
      <div className="container w-4/12 mt-28  ">
        <Input />
      </div>
    </div>
  );
}

export default App;
