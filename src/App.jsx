import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Products from "./components/Products"
import Users from "./components/Users";
const App = () => {

  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/users" element={<Users></Users>} />
        <Route path="/products" element={<Products></Products>} />
      </Routes>
    </div>
  );
};

export default App;
