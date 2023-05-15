const mongoose = require('mongoose')
const { Schema } = mongoose

const roomsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    imageUrls: {
        type:[],
        require: true
    },
    rentPerDay: {
        type: Number,
        require: true
    },
    Type: {
        type:[],
        require: true
    },
    maxCount: {
        type: Number,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    currentBookings: {
        type: [],
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

const rooms = mongoose.model('rooms', roomsSchema)

module.exports = rooms