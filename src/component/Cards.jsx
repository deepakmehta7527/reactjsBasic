import React from 'react'
import Card from "./Card"
const Cards = ({users,handleRemove}) => {
  return (
    <div className='overflow-auto mx-h-96 h-96 p-4 bg-sky-100 flex gap-14 justify-center flex-wrap'>

        <Card  user={users} handleRemove={handleRemove} />

</div>


  )
}

export default Cards
