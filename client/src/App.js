import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // craete a state here
  const [allmessage, setallMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [allUsers, setallUsers] = useState([]);
  // get all  messages
  useEffect(() => {
    axios.get("/api/chats").then((response) => setallMessages(response.data));
  }, []);
  console.log("GET REQUEST 1:", allmessage);
  // create  post request messages api/messages
  // only make a post request when the user clicks the button

  const createChat = () => {
    axios
      .post("/api/messages", {
        messages: "Hello there friend",
      })
      .then(function (response) {
        console.log("POST REQUEST 1:", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // all users  get get request api/users
  useEffect(() => {
    axios.get("/api/users").then((response) => setallUsers(response.data));
    console.log("GET REQUEST 2:", users);
  }, []);

  // create a user post request  api/users
  const createUsers = () => {
    axios
      .post("/api/createusers", {
        messages: "Hello there friend",
      })
      .then(function (response) {
        console.log("POST REQUEST 2:", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // get single  user  api/users/{id}
  useEffect(() => {
    axios.get("/api/users/id").then((response) => setUsers(response.data));
    console.log("GET REQUEST 2:", users);
  }, []);

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
          <button className="send-button" onClick={createChat}>
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
