import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // craete a state here
  const [message, setMessages] = useState([]);
  const [users, setUsers] = useState([]); 
  // get all  messages
  useEffect(() => {
    axios.get("/api/chats").then((response) => setMessages(response.data));
  }, []);

  // create  post request messages api/messages 
   // only make a post request when the user clicks the button
  const createChat = () => {
    axios.post('/api/messages', {
       messages: 'Hello there friend'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  
  // all users  get get request api/users
  useEffect(() => {
    axios.get("/api/users").then((response) => setUsers(response.data));
    console.log(users);
  }, []);


  // create a user post request  api/users
  const createUsers = () => {
    axios.post('/api/users', {
       messages: 'Hello there friend'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  // get single  user  api/users/{id}
  useEffect(() => {
    axios.get("/api/users/{id}").then((response) => setUsers(response.data));
    console.log(users);
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
          <button className="send-button" onClick={createChat}>SEND</button>
        </div>
      </div>
    </div>
  );
}

export default App;
