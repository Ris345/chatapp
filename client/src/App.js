import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // craete a state here
  const [message, setMessages] = useState([]);
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



  // create a user post request  api/users

  

  // get single  user  api/users/{id}




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
