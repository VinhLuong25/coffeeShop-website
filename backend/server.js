const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("connected to db ");
  }
);

const port = process.env.PORT || 4000;

//route
const contactRouter = require("./routes/contactRoute");
const userRouter = require("./routes/userRouter");
app.use("/contact", contactRouter);
app.use("/auth", userRouter);

app.listen(port, () => {
  console.log(`live on port ${port}`);
});
