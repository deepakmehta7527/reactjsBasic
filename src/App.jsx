import React, { useState } from 'react'

const App = () => {

  const [val,setval]=useState({name:"",email:""});

  const handlesubmit=(event)=>{
    event.preventDefault();
    console.log(val);
  }

  return (
    <div>
<form onSubmit={handlesubmit}>
  {/* jab koi input update ho tho uske saat previous value pe effect na pade tho "previous value" store
   ke saat new value bhi "ui" pe display ho tho ess type se use kre */}
<input type="text" placeholder='name' onChange={(event)=>setval({...val,name:event.target.value})}/>
<input type="email" placeholder='email' onChange={(event)=>setval({...val,email:event.target.value})}  />
<input type="submit" />
</form>
    </div>
  )
}

export default App
