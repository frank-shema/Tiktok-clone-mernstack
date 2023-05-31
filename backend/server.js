import mongoose from "mongoose";
import express from "express";
import Data from "./data.js";
import Videos from "./dbModel.js";

const app = express();
app.use(express.json());

//the midlleware that is going to be used
app.use((req, res, next) => {
    res.setHeaders("Acess-Controll-Allow-Origin", "*"),
    res.setHeaders("Acess-Controll-Allow-Headers","*")
    next();
})


app.get('/v1/posts', (req, res) => {
  res.send(Data).status(200);
});

const DB_URL = 'mongodb://127.0.0.1:27017/titok';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/v2/posts', async (req, res) => {
  try {
    const dbVideos = req.body;
    const createdVideo = await Videos.create(dbVideos);
    res.status(200).send(createdVideo);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/v2/posts', async (req, res) => {
  try {
    const videos = await Videos.find();
    res.status(200).send(videos);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/', (req, res) => res.status(200).send("hello world!"));


app.listen(3000, function () { 
  console.log("listening on port 3000");
});
