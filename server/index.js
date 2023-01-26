const express = require("express");
const app = express();
const port = 3001;

app.get("/api/chats", (req, res) => {
  res.json({
    name: "Rishav A",
    messages: [
      { text: "Hey there!" },
      { text: "How is everybody doing ?" },
      { text: "So glad this chat is up and running" },
    ],
    currentuser: "You",
    currentmessages: [
      { text: "I know so cool right!" },
      { text: "This is a lot of fun!" },
    ],
  });
});

// creating chat mesaages
app.post("/api/messages", (req, res) => {
  res.send("Successfully connected with the server");
});

// get all the users
app.get("/api/users", (req, res) => {
  console.log(" All users will be retrevied from this requests!");
});

//create user
app.post("/api/users", (req, res) => {
  res.send("creating all the users...");
});

// getting the users by id
app.get("api/users/{id}", (req, res) => {
  console.log(" All users will be retrevied from this requests!");
});

app.listen(3001, () => {
  console.log(`Example app listening on port ${port}`);
});
