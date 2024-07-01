const express = require('express');
const db = require('./db')
const cors = require('cors')
require('dotenv').config();
const bookRoutes = require('./routes/bookroute')
const userRoutes = require('./routes/userRoute')

const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json()); //req.body

const PORT = process.env.PORT || 4000
app.get('/', (req, res) => {
    res.send('this is my server')
})

app.use(cors())

app.use("/book", bookRoutes);
app.use("/user", userRoutes)


app.listen(PORT, () => {
    console.log(`connected to ${PORT}`)
})