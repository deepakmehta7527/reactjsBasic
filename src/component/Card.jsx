import React from 'react'

const Card = ({user,handleRemove}) => {
  return (
<>
{
  user.map((item,index)=>(
    <div key={index} className='w-52 h-full bg-sky-300 rounded-lg flex flex-col items-center justify-center'>
    <div className='image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden'>
      <img src={item.image} alt="" />
    </div>
    <h1 className='bg-slate-50'>{item.name}</h1>
    <p className='bg-[orange]'>{item.email}</p>
    {/* yaha pe index as argument pass ho rha hai aur "parent" componet main as "parameter" accept kr rha hai */}
    <button onClick={()=>handleRemove(index)} className='bg-red-500 px-3 py-3 my-3 rounded-[30%]'>Remove it</button>
        </div>
  ))
}
</>







  )
}

export default Card
