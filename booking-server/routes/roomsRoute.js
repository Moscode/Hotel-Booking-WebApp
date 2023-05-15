const express = require('express')
const Room = require('../models/rooms')
const router = express.Router()

router.get('/getallrooms', async(req, res)=>{
    try{
        const Rooms = await Room.find({})
        return res.json({ Rooms })
    }catch(err){
        return res.status(404).json({Message:err})
    }
})

module.exports = router