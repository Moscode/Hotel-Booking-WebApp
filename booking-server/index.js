const express = require('express')
const cors = require('cors')
const roomsRoute = require('./routes/roomsRoute')

const app = express()

const dbConfig = require('./db')
app.use(cors({origin:'https://moscode-fantastic-cod-w99vvrrwxg739gv4-5173.preview.app.github.dev'}))
app.use('/api/v1/rooms', roomsRoute)

const port = process.env.port || 5500

app.listen(port, () => console.log(`Server running on port ${port}`))