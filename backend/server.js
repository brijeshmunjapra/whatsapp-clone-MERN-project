import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js"
const app = express();
const port = process.env.PORT || 9000;

const connection_url = 'mongodb+srv://brijesh:G5rSBQ5vkSH1mV3N@cluster0.ozbvkso.mongodb.net/whatsapp?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})

app.get("/", (req, res) => res.status(200).send("Hello"));
app.post('/messages/new', async (req, res)=>{

    try{
        const dbMessage = req.body
    
       const message = await Messages.create(dbMessage)
       return res.status(201).send(message);

    }catch(err){

        console.log(err, "#############################");
       return res.status(500).send(err);
    }
   
})
    

app.listen(port, () => console.log("server is running"));
// G5rSBQ5vkSH1mV3N