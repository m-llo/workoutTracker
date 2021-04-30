const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const router = require("./controllers")

const PORT = process.env.PORT || 3000

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});



// routes
app.use(router)
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
