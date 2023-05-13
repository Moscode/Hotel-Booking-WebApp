const express = require('express')

const app = express()

const dbConfig = require('./db')

const port = process.env.port || 5001

app.listen(port, () => console.log(`Server running on port ${port}`))