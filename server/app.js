// app.js
import express from 'express'
import mongoose from 'mongoose';
import router from "./router/routes.js";
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const port = 1000;
app.use(cors())
app.use(bodyParser.json())

app.use('/api/', router)
main()

async function main() {
  try {
    await mongoose.connect("mongodb://0.0.0.0/lostNseek");

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${1000}`);
});
