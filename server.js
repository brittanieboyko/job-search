const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const apiPort = 3001
const mongoose = require("mongoose");

// const apiRouter = require('./routes/apiRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use('/api', apiRouter);
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

mongoose
    .connect('mongodb://127.0.0.1:27017/jobs', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
     })
    .catch(e => {
        console.error('Connection error', e.message)
    })

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
