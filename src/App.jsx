import React, { useRef } from 'react'
const App = () => {
  // by default pass null it compulsory
  const surname=useRef(null);
  const name=useRef(null)

  // ye ek function hai jha pe form ko control ke saat "output" bhi "nikal" skte hia
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name.current.value);
    console.log(surname.current.value,name.current.value);
  }

  return (
    // "onSubmit" se form ko by default referece ko roka ja skta hai
   <form onSubmit={handleSubmit}>
    {/* "ref" use krke har ek input ko target kiya jata hai aur jab
    "form submit" hoga tab input "nikal" skte hai  */}
    <input ref={name} type="text" placeholder='name' />
    <input ref={surname} type="text" placeholder='surname' />
    <input type="submit" />
   </form>
  )
}

export default App
