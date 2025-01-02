import React from "react";

const Card = () => {

  // Function to handle button click event
  function handle(){
    alert("download started now");
  }


  return (
     <div className="w-full h-screen bg-zinch-300 flex flex-col gap-10 items-center justify-center">
      <div className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
        <h3 className="font-semibold text-xl">Mahiya ve</h3>
        <p className="text-xs mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem repellendus sit quos.</p>
<button className="px-2 py-1 bg-blue-400 text-xs" onClick={handle}>Download Now</button>
      </div>

     </div>
  )
};

export default Card;
