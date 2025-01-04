import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetail = () => {
  // use params ka estemal krke sbhi dynamic url ko fetch krke "ui" pe show kiya ja skta hai
  // "name" naam se "dynamic" path ka naam diya huwa hai ess krke access krne ke liye "name" pass krna pda
  let {name}=useParams();

  let navigate=useNavigate()
  const previous=()=>{
    // actual "url" pe ja skte ho
      navigate("/user");

// actual "url" pe nhi jate ho just previous 'url' pe jaate ho
// navigate(-1);

  }
  return (
    <div className='w-1/2 m-auto mt-10'>
  <h1 className='text-red-200 text-5xl mb-2'>User Detail</h1>
  <h1 className='text-3xl'>hii {name}</h1>
  <button onClick={previous} className='mt-5 text-white px-3 py-2 bg-red-300'>Go Back</button>
    </div>
  )
}

export default UserDetail
