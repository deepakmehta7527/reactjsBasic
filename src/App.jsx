import React, { useState } from 'react'
import Cards from './component/Cards'
import Form from './component/Form'
const App = () => {
  const [users,setUsers]=useState([])
  const handleFormSubmitData=(data)=>{
    // yaha pe first already "data" ko copy kiya gya hai uske baad ab jo "data" add hoga example:-name,email,img
    setUsers([...users,data])
  }

  const handleRemove=(id)=>{
  // yaha pe "setUsers",ek function ka use krke 'users' state pe "filter" apply kiya gya hai
  setUsers(()=>users.filter((item,index)=>index!=id))
}


  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
      <Cards handleRemove={handleRemove} users={users}></Cards>
      <Form handleFormSubmitData={handleFormSubmitData}></Form>
      </div>
    </div>
  )
}

export default App
