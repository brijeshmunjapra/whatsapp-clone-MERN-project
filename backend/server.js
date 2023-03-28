import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
const app = express();
const port = process.env.PORT || 9000;
// mongodb+srv://brijesh:<password>@cluster0.ozbvkso.mongodb.net/?retryWrites=true&w=majority
// G5rSBQ5vkSH1mV3N
const connection_url =
  "mongodb+srv://brijesh:G5rSBQ5vkSH1mV3N@cluster0.ozbvkso.mongodb.net/whatsapp?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//app config
app.get("/", (req, res) => res.status(200).send("Hello"));

//middleware
app.use(express.json());

//db config
app.post("/messages/new", async (req, res) => {
  try {
    const dbMessage = req.body;
    const message = await Messages.create(dbMessage);
    return res.status(201).send(message);
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.get("/messages/new", async (req, res) => {
  try {
    const messages = await Messages.find({});
    return res.status(200).send(messages);
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.listen(port, () => console.log("server is running"));
