// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Counter from "./Counter";
// import Layout from "./Layout";
// import Blogs from "./Blogs";
// import Contact from "./Contact";
// import Home from "./Home";

function App() {
    
  // const myStyle = {
  //     color: "blue",
  //     fontSize: "100px",
  // };
  return (
    <div >
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter> */}

      <Counter/>
    </div>
  );
}

export default App;
