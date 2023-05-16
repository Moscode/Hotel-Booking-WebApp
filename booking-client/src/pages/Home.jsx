import {useState, useEffect} from 'react'
import axios from 'axios'

import Room from '../components/Room'
import ErrorPage from '../pages/ErrorPage'

const Home = () => {
const [rooms, setRooms] = useState([])
const [loading, setLoading] = useState()
const [error, setError] = useState()
useEffect(()=>{
    const fetchRooms = async () => {
        try{
            setLoading(true)
            const allrooms = (await axios.get('https://moscode-fantastic-cod-w99vvrrwxg739gv4-5500.preview.app.github.dev/api/v1/rooms/getallrooms')).data
            setRooms(allrooms.Rooms)
            setLoading(false)
        }catch(err){
            setError(true)
            console.log(`Error occur when fetching rooms ${err}`)
            setLoading(false)
        }
    }
    fetchRooms()
},[])
  return (
    <div>

        {loading ? <h1>Loading...</h1>: error ? <ErrorPage /> : <Room rooms={rooms}/>}
    </div>
  )
}

export default Home