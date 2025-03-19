import React, { useState } from 'react'

function State1() {

  let [a,b]=useState(1);
  const dec=()=>{
    b(a-=1)
  }
  const inc=()=>{
    b(a+=1)
  }
  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{a}</span>
      <button onClick={inc}>+</button>
    </div>
  )
}

export default State1
