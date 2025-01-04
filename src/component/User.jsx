import React from 'react'
import {Link, Outlet, useParams} from "react-router-dom"

const User=()=>{

  return (
    <div className="w-1/2 m-auto mt-10 ">
      <h1 className='text-red-200 text-5xl mb-2'>User</h1>
  <div className='flex w-1/2 text-blue-700 flex-col  mt-5'>
  <Link to="/user/Shivam">shivam</Link>
<Link to="/user/anu">anu</Link>
<Link to="/user/Shiv">shiv</Link>

  </div>

  <hr />
  <Outlet />


    </div>
  )
}

export default User;