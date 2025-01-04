import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import User from "../component/User";
import UserDetail from "../component/UserDetail";

const RouterUses = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/user" element={<User></User>}>
          <Route path="/user/:name" element={<UserDetail></UserDetail>} />
        </Route>
      </Routes>
    </div>
  );
};

export default RouterUses;
