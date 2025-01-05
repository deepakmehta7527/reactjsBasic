import React, { useEffect } from 'react'

const Home = () => {

  // home component create hota hai jab aap first time visit krte ho
  // jab koi aur component pe visit krte ho tho component delete hota hai
  useEffect(()=>{
    console.log("home component is created");

    return ()=>{
      console.log("Home component is Deleted")
    }
  })
  return (
    <div>
      this is home
    </div>
  )
}

export default Home
