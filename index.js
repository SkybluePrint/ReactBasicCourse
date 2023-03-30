const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jihoon:dnflwlgns7039@boilerplate.x7gp10c.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MonggoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

