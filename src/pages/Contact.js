import React from "react";
import "./style.css"
import style from "./style.module.css"

export default function Contact() {
  return (
    <div className="flex h-screen w-full justify-center items-center ">
      {/* tailwind css */}
      <div className="font-bold text-2xl">Tailwind</div> <br/>
      {/* inline css */}
      <div style={{ color: "black", fontSize:"100px" }}>inline</div> <br/>
      {/* extrenal css */}
      <div className="external">Extrenal</div>
      {/* module css */}
      <div className={style.modulecss}  >module</div>
      {/* Both */}
      <div className={`${style.modulecss} font-bold `}>Both</div>


    </div>
  );
}
