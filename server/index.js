const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.get("/api/chats", (req, res) => {
  res.json({
    messages: [
      { text: "Hey there!" },
      { text: "How is everybody doing ?" },
      { text: "So glad this chat is up and running" },
    ],
    currentmessages: [
      { text: "I know so cool right!" },
      { text: "This is a lot of fun!" },
    ],
  });
});

// creating chat mesaages
app.post("/api/messages", (req, res) => {
  //res.send("Successfully connected with the server");
  const data = req.body;
  // Do something with the data
   res.json({'Messages' : 'This is a test'}) 
});

// get all the users
app.get("/api/users", (req, res) => {
  res.send({ name: "RishavA", currentuser: "You" });
});

//create user
app.post("/api/createusers", (req, res) => {
  const data = req.body;
  console.log(data);
  // Do something with the data
  res.json({ message: "Data received" });
});

// getting the users by id
app.get("/api/users/id", (req, res) => {
  console.log(" All users will be retrevied from this requests!");
});

app.listen(3002, () => {
  console.log(`Example app listening on port ${port}`);
});
