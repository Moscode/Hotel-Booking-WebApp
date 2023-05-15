import {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
const [rooms, setRooms] = useState([])
useEffect(()=>{
    const fetchRooms = async () => {
        try{
            const allrooms = (await axios.get('https://moscode-fantastic-cod-w99vvrrwxg739gv4-5500.preview.app.github.dev/api/v1/rooms/getallrooms')).data
            console.log(allrooms)
            setRooms([allrooms.Rooms.length])
        }catch(err){
            console.log(`Error occur when fetching rooms ${err}`)
        }
    }
    fetchRooms()
},[])
  return (
    <div>
        <h1>We have a total of {rooms} rooms</h1>
    </div>
  )
}

export default Home