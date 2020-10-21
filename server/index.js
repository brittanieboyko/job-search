const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const apiPort = 3000;

const db = require('./db/db')
const apiRouter = require('./routes/jobRouter');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', apiRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
module.exports = app;