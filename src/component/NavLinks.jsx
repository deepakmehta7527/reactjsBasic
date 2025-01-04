import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
// "Link" ki jagah "NavLink" ka bhi use kr skte hai
// "NavLink" hamme "isActive" provide krta hai jab hum "home" ja "about" button pe click krte hai tab console
//mein dekh skte hai

<div>

  {/*   (e)=>{
        console.log(e)
      }  "ye function NavLink mein pass krke pta kr skte ho kya resul console mein aw rha hai" */}
      <nav className='flex gap-4 rounded-md'>
    <NavLink style={
       (e)=>{
       return{
         color: e.isActive?"tomato":""
       }

      }
    } className='bg-slate-300 ' to="/">Home</NavLink>
    <NavLink
    style={
      (e)=>{
      return{
        color: e.isActive?"tomato":""
      }

     }
   }
    className='bg-slate-300 ' to="/about">about</NavLink>

    <NavLink to="/user">User</NavLink>
  </nav>

    </div>
  )
}

export default NavLinks;