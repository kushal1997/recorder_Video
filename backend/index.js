const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const https = require("https");
const fs = require("fs");
require('dotenv').config();

const mongodbUri = process.env.MONGODB_URI;
const app = express();

app.use(cors());

const mediaRoutes = require("./routes/media");

app.use("/api/v1/media", mediaRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));

// Add route for "/"
app.get("/", (req, res) => {
  res.send("<h1>Welcome!! Video Server</h1>");
});

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

// https
//   .createServer(
//                 // Provide the private and public key to the server by reading each
//                 // file's content with the readFileSync() method.
//     {
//       key: fs.readFileSync("key.pem"),
//       //ca: fs.readFileSync("rootCA.crt"),
//       cert: fs.readFileSync("ca1.pem"),

//     },

// app
// ).listen(4000, () => {
//     console.log(`Example app listening on port 4000`);
// });
app.listen(4000, () => {
  console.log("App is running on PORT 4000");
});
