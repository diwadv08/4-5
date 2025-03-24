import React, { useEffect, useState } from 'react'

function Effect1() {
  let [a,setA]=useState(0);
  let [a1,setA1]=useState([]);
  useEffect(()=>{
    console.log(10);
  },[a1])
  let num=1;


  function change(){
    num+=1;
    setA1((e)=>{
      return [...e,num]
    });
  }

  return (
    <div>
        <button onClick={()=>{setA(a-=1)}}>-</button>
        <span>{a}</span>
        <button onClick={()=>{setA(a+=1)}}>+</button>
        <button onClick={change}>Change</button>
    </div>
  )
}

export default Effect1
