import { Outlet } from "react-router-dom";
import "./App.css";
import { getWords } from "./request_handler/ServerRequest";

function App() {
  // Send request to server to get words
  getWords();

  return (
    <div className="app">
      <Outlet />
    </div>
  )
}

export default App;