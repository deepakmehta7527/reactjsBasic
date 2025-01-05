import React from "react";
import {Link, Route, Routes} from "react-router-dom"
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";

const App = () => {

  return (
    <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/contact"}>Contact</Link>


    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    </div>
  );
};

export default App;
