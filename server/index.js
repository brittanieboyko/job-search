require("dotenv").config();

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;
const logger = require("morgan");
const db = require("./db/db");
const path = require("path");

const apiRouter = require("./routes/apiRoutes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", apiRouter);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => console.log(`Server running on port ${port}`));
module.exports = app;
