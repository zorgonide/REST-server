const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(bodyParser.json())
app.use(cors())
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)
app.get('/', (req,res) => {
    res.send("We're on home")
})
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true} , () => {
        console.log('Connected')
})

app.listen(3000)