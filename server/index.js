require("dotenv").config();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3001;

const db = require('./db/db');
const apiRouter = require('./routes/apiRoutes');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', apiRouter);

app.listen(port, () => console.log(`Server running on port ${port}`))
module.exports = app;