import React, { useState } from "react";
import Card from "./component/Card";

const App = () => {
  const data = [
    {
      name: "John",
      profession: "painter",
      image:
        "https://images.unsplash.com/photo-1734366965585-5381428ea18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
      friends:false
    },
    {
      name: "John",
      profession: "painter",
      image:
        "https://images.unsplash.com/photo-1727201233565-9cc29c58450b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
      friends:false

    },
    {
      name: "John",
      profession: "painter",
      image:
        "https://images.unsplash.com/photo-1685720818009-ac850473f60f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
      friends:false

    },
    {
      name: "John",
      profession: "painter",
      image:
        "https://images.unsplash.com/photo-1734113230569-56b1bbbf06ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
      friends:true

    },
  ];

  //  jaha state bnati hai wohi pe update hoti hai but "props" case main kese hoga update chalo dekhte hai
  const [realdata,setrealdata]=useState(data);

  // function ke through handle karke "child" component se "parent" component ko update
// es function ne "itemvalue" liya hai "handleClick" main jo "handleFriendbutton" pass kiya hai aur saat main
// parent se hi koi "index" bhi pass kiya hai "child component" main aur jab child main "handleclick" pe jab
//click hoga tab "return" main "handleClick={handleFriendsbutton}" jo "handleFriendbutton" ko argument pass ho gya hai
// aur as parameter use kr skte hai
  const handleFriendsbutton=(itemvalue)=>{
    setrealdata((previous)=>{
      return previous.map((item,index)=>{

        if(index===itemvalue){
          return {...item,friends:!item.friends}
        }
        return item;
      })
    })
  }




  return <>
<div className="w-full h-screen items-center bg-zinc-300 justify-center">
{
  realdata.map((item,index)=>(
    // jo index yaha pe pass kiya hai pehle ye child component button ke ye index pass
    // hoga uske baad jo return main "index" as paremeter return "handleFriendsbutton" ko wapas milega uske baad
    // usko as Parameter "handleFriendsbutton" main use krte hai
    <Card key={index} index={index} handleClick={handleFriendsbutton} item={item}/>
  ))
}
</div>



  </>;
};

export default App;
