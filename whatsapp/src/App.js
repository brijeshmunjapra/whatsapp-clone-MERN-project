import "./App.css";
import Sidebar from "./Components/Sidebar";
import ChatComp from "./Components/ChatComp";
import { useEffect } from "react";
import Pusher from "pusher-js"

function App() {
  useEffect(() => {
  
    const pusher = new Pusher('eb290f24781cde35e3bd', {
      cluster: 'ap2'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  }, [])

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
