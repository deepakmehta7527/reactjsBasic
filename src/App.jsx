import { useForm } from "react-hook-form"

const App = () => {
  // "useForm" provide krta hai khudka "handleSubmit"
   const {register,handleSubmit}=useForm()

   // register provide three thing "onBlur","onChange","ref"


  return (
    <div>
{/*1) "onChange"-> eski help se jo bhi input mein change hoge "useForm" khyal rakh payega
  2) "ref"->eski help se konsi "input" pe hai uska khyal rakh payega
  3) "onblur"-> eski help se jo bhi "user" "ui" mein konse input field pe hai woh check kr payega
*/}

<form onSubmit={handleSubmit(data=>console.log(data))}>
  {/* spread three thing "onchange","ref","onblur"*/}
  <input {...register("name")} placeholder="name" type="text" />
  <input {...register("email")} type="text"  placeholder="email"/>
  <input type="submit" />
</form>

    </div>
  )
}

export default App
