import React, { useEffect, useState } from 'react'

function Effect1() {
  const [a,setA]=useState(10);
  const [b,setB]=useState(10);
  useEffect(()=>{
    console.log("I am loaded");
  },[])
  useEffect(()=>{
    console.log("A changed");
  },[a])
  useEffect(()=>{
    console.log("B changed");
  },[b])
  return (
    <div>
      <button onClick={()=>setB(b+1)}>{b}</button>
      <br />
      <br />
      <button onClick={()=>{setA(a-1)}}>-</button>
      {a}
      <button onClick={()=>{setA(a+1)}}>+</button>
    </div>
  )
}

export default Effect1
