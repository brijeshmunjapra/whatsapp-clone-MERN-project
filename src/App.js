import "./App.css";
import Sidebar from "./Components/Sidebar";
import ChatComp from "./Components/ChatComp";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <ChatComp />
      </div>
    </div>
  );
}

export default App;
