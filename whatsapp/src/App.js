import "./App.css";
import Sidebar from "./Components/Sidebar";
import ChatComp from "./Components/ChatComp";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      console.log(res.data, "responce");
      setMessages(res?.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("eb290f24781cde35e3bd", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });
  }, [messages]);



  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <ChatComp messages={messages} />
      </div>
    </div>
  );
}

export default App;
