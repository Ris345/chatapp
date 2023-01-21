import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // craete a state here
  const [message, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/api/chats").then((response) => setMessages(response.data));
  }, []);

  console.log(message);

  return (
    <div className="App">
      <div className="main-chat">
        <div className="chat-box">
          <h3 className="chat-title">Chat Room</h3>
          <p></p>
          <div></div>
        </div>
        <div className="user-box">
          <h3 className="user-title">Users</h3>
          <p></p>
        </div>
        <div>
          <input placeholder="Chat here :)" className="chat-input"></input>
          <button className="send-button">SEND</button>
        </div>
      </div>
    </div>
  );
}

export default App;
