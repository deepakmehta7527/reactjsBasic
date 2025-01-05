import React, { useEffect, useState } from 'react'


const About = () => {
  const [first,setfirst]=useState("this is normal data");
  const [second,setsecond]=useState("this is very large data");

  useEffect(()=>{
    console.log("about component is created")

    return ()=>{
      console.log("About component is deleted")
    }
  },[])


  // jab large file ho uss kese main aggr chahte ho ki "component" refresh ho
  // tho bracket"[]" mein woh "state" ka value pass kr do
  useEffect(()=>{
    console.log("about component is created")

    return ()=>{
      console.log("About component is deleted")
    }
  },[second])
  return (
    <div>
      {/* button pe click  krne pe "ye" component ke page ko refresh kr
      rha hai eske liye "[]" bracket ko pass krna hota hai
      useEffect() mein uske baad ye "refresh" nhi hota hai sirf "woh" main part
      "update" hota hai
      */}
      <h1>{first}</h1>
      <button onClick={()=>setfirst("normal data has been changed")}>change noral data</button>

      <h2>{second}</h2>
      <button onClick={()=>setsecond("large data has beend changed")}>change large data</button>
    </div>
  )
}

export default About
