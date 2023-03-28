import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from 'cors';
const app = express();
const port = process.env.PORT || 9000;
// mongodb+srv://brijesh:<password>@cluster0.ozbvkso.mongodb.net/?retryWrites=true&w=majority
// G5rSBQ5vkSH1mV3N
const pusher = new Pusher({
  appId: "1574979",
  key: "eb290f24781cde35e3bd",
  secret: "339313096d6e4d32e6f8",
  cluster: "ap2",
  useTLS: true,
});

const connection_url =
  "mongodb+srv://brijesh:G5rSBQ5vkSH1mV3N@cluster0.ozbvkso.mongodb.net/whatsapp?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("db connected");
  const msgCollection = db.collection("messages");
  const chnageStream = msgCollection.watch();

  chnageStream.on("change", (change) => {
    console.log(change, "change"); 

    if(change.operationType === 'insert'){
        const messageDetails = change.fullDocument;
        pusher.trigger('messages', 'inserted',
        {
            name: messageDetails.name,
            message: messageDetails.message
        }
        )
    }else{
        console.log('error pusher')
    }

  });
});

//app config
app.get("/", (req, res) => res.status(200).send("Hello"));

//middleware
app.use(express.json());
app.use(cors());

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

app.get("/messages/sync", async (req, res) => {
  try {
    const messages = await Messages.find({});
    return res.status(200).send(messages);
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.listen(port, () => console.log("server is running"));
