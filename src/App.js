import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./NoPage";

function App() {
  // const myStyle = {
  //     color: "blue",
  //     fontSize: "100px",
  // };
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            path="/Blogs"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          ></Route>
          <Route
            path="/Contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          ></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
