const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

const mediaRoutes = require("./routes/media");

app.use("/api/v1/media", mediaRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));

const mongodbUri = "mongodb+srv://kushalrao103:XCD2fCSL9vo6wSaX@uploadvideo.xq4wcrq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB Atlas");
});

db.on("error", (err) => {
  console.error("Error connecting to MongoDB Atlas", err);
});

// Optionally, you can add a 'disconnected' event handler to handle disconnections

app.listen(4000, () => {
  console.log("App is running on PORT 4000");
});
