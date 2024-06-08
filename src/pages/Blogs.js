import React, { useState } from "react";

export default function Blogs() {
  let [name, setName] = useState("");

  const HandleSubmit = () => {
    localStorage.setItem("Name", name);
  };

  return (
    <div className=" ">
      <div className="">
        <form className="gap-3" onClick={HandleSubmit}>
          <label>enter your name : </label>
          <input
            className="border"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="border" type="submit">
            Submit
          </button>
        </form>
        <h1>{localStorage.getItem("Name")}</h1>
      </div>
    </div>
  );
}
