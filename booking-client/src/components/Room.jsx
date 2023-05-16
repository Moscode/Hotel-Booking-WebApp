import React from 'react'

const Room = ({ rooms }) => {
  return (
    <>
    {
      rooms.map((room, id)=>{
      <h1 key={id}>{room.name}</h1>
    })
    }
    </>
  )
}

export default Room