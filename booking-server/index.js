const express = require('express')
const roomsRoute = require('./routes/roomsRoute')

const app = express()

const dbConfig = require('./db')

app.use('/api/v1/rooms', roomsRoute)

const port = process.env.port || 5500

app.listen(port, () => console.log(`Server running on port ${port}`))