
const card = ({text,color}) => {


  return (
    <div>
    <button className={`py-4 px-3 mx-3 my-2 ${color}`}>{text}</button>

    </div>
  )
}

export default card
