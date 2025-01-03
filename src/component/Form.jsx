import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({handleFormSubmitData}) => {
  const {register,handleSubmit}=useForm();
  return (
    <div className='mt-10 flex gap-10 justify-center'>
      {/* yaha pe "data" as argument pass kiya ja rha hai "handleFormSubmitData(data)" */}
      <form className='flex gap-10 ' onSubmit={handleSubmit(data=>handleFormSubmitData(data))}>
        <input {...register("name")} className='rounded-md px-2 py-1 text-base  bg-[gray]  font-semibold outline-none' type="text" />
        <input {...register("email")} className='rounded-md px-2 py-1 text-base bg-[gray] font-semibold outline-none' type="text" />
        <input {...register("image")} className='rounded-md px-2 py-1 text-base bg-[gray] font-semibold outline-none' type="text" />
        <input className='bg-slate-900 rounded-md px-3 py-3' type="submit"/>

      </form>

    </div>
  )
}

export default Form
