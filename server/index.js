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
  },);
});

app.post("/api/messages", (req, res) => {
  
})




app.listen(3001, () => {
  console.log(`Example app listening on port ${port}`);
});
