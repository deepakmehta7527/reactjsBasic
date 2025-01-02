import React from "react";

const Card = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1655608866478-71746ac1b43b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpbHklMjBvYmplY3R8ZW58MHx8MHx8fDA%3D",
      title: "glass the house",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, qui  harum? Officiis dolorum, voluptatibus minima",
      instock:true
    },
    {
      img: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFpbHklMjBvYmplY3R8ZW58MHx8MHx8fDA%3D",
      title: "won the race",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quiharum? Officiis dolorum, voluptatibus minima   ",
      instock:false
    },
    {
      img: "https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhaWx5JTIwb2JqZWN0fGVufDB8fDB8fHww",
      title: "won the free fire",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quiharum? Officiis dolorum, voluptatibus minima   ",
      instock:false
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-20">
      {
        data.map((item,index)=>(
          <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img
            className="w-full h-full object-cover"
src={item.img}
          />
        </div>
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">{item.title}</h2>
          <p>
{item.desc}
// how to apply 'tailwind' on conditon rendering
          </p>
        <button className={`px-4 py-1 ${item.instock?"bg-orange-500":"bg-slate-500"} rounded-xl`}>{item.instock?"instock":"outofStock"}</button>
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default Card;
