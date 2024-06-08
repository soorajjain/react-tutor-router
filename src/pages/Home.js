import React, { useEffect } from "react";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  useEffect( () => {
    setInterval(() => {
      setCount(count+1)
    }, 1000);
  })

  return (
    <div className="flex h-screen w-full justify-center items-center ">
      <div className="font-bold text-2xl">{count}</div>
      <button onClick={() => {
        setCount(0)
      }}>clear</button>
    </div>
  );
}
