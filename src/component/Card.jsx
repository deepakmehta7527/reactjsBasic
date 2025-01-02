import React, { useState } from 'react'

const card = () => {
//setcore state
  const [score,setscore]=useState(0);

// setbanned
const [banned,setbanned]=useState(false)

// setvalue
const [value,setvalue]=useState(12)


// let see how to change object value
const [objectvalue,setobjectvalue]=useState({name:"deepak",isBanned:false})


  return (
    <div>
     <div className='px-10 '>{score}</div>
     {/* setstate set in this way don't set directly like - setstate(5) it will call directly so try to
     make function then call like below */}

{/* setscore button */}
     <button onClick={()=>setscore(5)} className='px-5 rounded-md bg-[red]'>change state</button>

{/* setbanned */}
     <h2 className='px-5'>{banned.toString()}</h2>
     <button onClick={()=>setbanned(!banned)} className='px-5 rounded-md bg-[red]'>click here</button>

{/* setvalue */}
<h2 className='px-5'>{value}</h2>
     <button onClick={()=>setvalue((prev)=>prev+1)} className='px-5 rounded-md bg-[red]'>setvalue</button>

{/* setobject value let see how to change */}
{/* first store all value in the form of copy then change */}
     <h2 className='px-5'>{objectvalue.isBanned.toString()}</h2>
     <button onClick={()=>setobjectvalue({...objectvalue,isBanned:objectvalue.isBanned})} className='px-5 rounded-md bg-[red]'>setvalue</button>




    </div>
  )
}

export default card
